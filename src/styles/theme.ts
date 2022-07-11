import { extendTheme } from "@chakra-ui/react"

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
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
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
        color: 'gray.50'
      },
    }
  }
})