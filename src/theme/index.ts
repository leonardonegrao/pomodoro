import { DefaultTheme } from 'styled-components';

const breakpoints = {
  sm: '375px',
  md: '768px',
  lg: '1440px',
};

const colors = {
  primary: {
    main: '#1E213F',
    light: '#161932',
  },
  secondary: {
    orange: '#F87070',
    blue: '#70F3F8',
    purple: '#D881F8',
  },
  gray: {
    main: '#D7E0FF',
    light: 'EFF1FA',
  },
  white: '#FFFFFF',
};

const typography = {
  fonts: {
    sansSerif: {
      fontFamily: 'Kumbh Sans, sans-serif',
    },
    serif: {
      fontFamily: 'Roboto Slab, serif',
    },
    mono: {
      fontFamily: 'Space Mono, sans-serif',
    },
  },
  variants: {
    appTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    heading1: {
      fontSize: '100px',
      fontWeight: 'bold',
      lineHeight: '120px',
      letterSpacing: '-5px',
    },
    heading2: {
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: '34px',
    },
    heading3: {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '19px',
      letterSpacing: '15px',
      textTransform: 'uppercase',
    },
    heading4: {
      fontSize: '13px',
      fontWeight: 'bold',
      lineHeight: '16px',
      letterSpacing: '5px',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '18px',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '14px',
    },
  },
};

const theme: DefaultTheme = { colors, typography, breakpoints };

export default theme;
