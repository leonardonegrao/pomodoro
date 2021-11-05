import { DefaultTheme } from 'styled-components';

const breakpoints = {
  sm: '375px',
  md: '768px',
  lg: '1440px',
};

const colors = {
  primary: {
    main: '#1E213F',
    dark: '#161932',
  },
  secondary: {
    orange: '#F87070',
    blue: '#70F3F8',
    purple: '#D881F8',
  },
  gray: {
    main: '#D7E0FF',
    light: '#EFF1FA',
  },
  white: '#FFFFFF',
};

const typography = {
  fonts: {
    sansSerif: {
      fontFamily: '"Kumbh Sans", sans-serif',
    },
    serif: {
      fontFamily: '"Roboto Slab", serif',
    },
    mono: {
      fontFamily: '"Space Mono", monospace',
    },
  },
  variants: {
    appTitle: {
      sm: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '24.14px',
      },
      md: {
        fontSize: '32px',
        lineHeight: '32.19px',
      },
    },
    heading1: {
      sm: {
        fontSize: '80px',
        fontWeight: 'bold',
        lineHeight: '80.47px',
        letterSpacing: '-4px',
      },
      md: {
        fontSize: '100px',
        lineHeight: '100.59px',
        letterSpacing: '-5px',
      },
    },
    heading2: {
      sm: {
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '20px',
      },
      md: {
        fontSize: '28px',
        lineHeight: '20.16px',
      },
    },
    heading3: {
      sm: {
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '14.08px',
        letterSpacing: '13.13px',
        textTransform: 'uppercase',
      },
      md: {
        fontSize: '16px',
        lineHeight: '16.09px',
        letterSpacing: '15px',
      },
    },
    heading4: {
      sm: {
        fontSize: '11px',
        fontWeight: 'bold',
        lineHeight: '11.06px',
        letterSpacing: '4.23px',
        textTransform: 'uppercase',
      },
      md: {
        fontSize: '13px',
        lineHeight: '16px',
        letterSpacing: '5px',
      },
    },
    body1: {
      sm: {
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '12.07px',
      },
      md: {
        fontSize: '14px',
        lineHeight: '14.08px',
      },
    },
    body2: {
      sm: {
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '14px',
      },
      md: {
        fontSize: '14px',
      },
    },
  },
};

const theme: DefaultTheme = {
  colors, typography, breakpoints, activeTheme: { color: 'orange', fontFamily: 'sansSerif' },
};

export default theme;
