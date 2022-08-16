import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F7FAFC',
      '100': '#EDF2F7',
      '200': '#E2E8F0',
      '300': '#CBD5E0',
      '400': '#A0AEC0',
      '500': '#718096',
      '600': '#4A5568',
      '700': '#2D3748',
      '800': '#1A202C',
      '900': '#171923',
    },
  },
  breakpoints: {
    sm: '18.75rem', // 300px
    md: '25rem', // 400px
    lg: '31.25rem', // 500px
    xl: '37.5rem', // 600px
    '2xl': '43.75rem', // 700px
    nb: '85.375rem', // 1366px
    d: '120rem', // 1920px
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  fontSizes: {
    '1xs': '0.625rem', // 10px
    '2xs': '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.375rem', // 22px
    '3xl': '1.5rem', // 24px
    '4xl': '1.625rem', // 26px
    '5xl': '1.75', // 28px
    '6xl': '1.875rem', // 30px
    '7xl': '2rem', // 32px
    '8xl': '2.125rem', // 34px
    '9xl': '2.25rem', // 36px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
