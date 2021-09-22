import 'styled-components';

interface TypographyVariant {
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };

    colors: {
      primary: {
        main: string;
        light: string;
      };
      secondary: {
        orange: string;
        blue: string;
        purple: string;
      };
      gray: {
        main: string;
        light: string;
      },
      white: string;
    };

    typography: {
      fonts: {
        sansSerif: {
          fontFamily: string;
        };
        serif: {
          fontFamily: string;
        };
        mono: {
          fontFamily: string;
        };
      };
      variants: {
        appTitle: TypographyVariant;
        heading1: TypographyVariant;
        heading2: TypographyVariant;
        heading3: TypographyVariant;
        heading4: TypographyVariant;
        body1: TypographyVariant;
        body2: TypographyVariant
      };
    },
  }
}
