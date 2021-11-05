import React from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

import defaultTheme from '@theme/.';

interface DynamicTheme {
  color?: 'orange' | 'blue' | 'purple';
  fontFamily?: 'sansSerif' | 'serif' | 'mono';
}

interface ThemeData {
  theme: DynamicTheme;
  setTheme: (theme: Partial<DynamicTheme>) => void;
}

const ThemeContext = React.createContext<ThemeData>({} as ThemeData);

export function ThemeProvider({ children }: React.ComponentProps<'div'>) {
  const [theme, setTheme] = React.useState<DynamicTheme>({ color: 'orange', fontFamily: 'sansSerif' });
  const [styledTheme, setStyledTheme] = React.useState<DefaultTheme>(defaultTheme);

  React.useEffect(() => {
    setStyledTheme((state) => ({ ...state, activeTheme: theme } as DefaultTheme));

    return () => {
      setStyledTheme(defaultTheme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={styledTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): [theme: DynamicTheme, setTheme: Function] {
  const { theme, setTheme } = React.useContext(ThemeContext);

  if (!theme && !setTheme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  function handleChange({ color, fontFamily }: DynamicTheme) {
    const activeColor = color ? color : theme.color;
    const activeFontFamily = fontFamily ? fontFamily : theme.fontFamily;

    const updatedTheme = {
      ...theme,
      color: activeColor,
      fontFamily: activeFontFamily,
    };
    
    setTheme({ ...updatedTheme });
  }

  return [theme, handleChange];
}