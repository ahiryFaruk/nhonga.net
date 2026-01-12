export const fonts = {
  primary: {
    name: 'GT Walsheim',
    fallback: 'system-ui, -apple-system, sans-serif',
    full: '"GT Walsheim", system-ui, -apple-system, sans-serif'
  },
  secondary: {
    name: 'Montserrat',
    fallback: 'system-ui, -apple-system, sans-serif', 
    full: '"Montserrat", system-ui, -apple-system, sans-serif'
  },
  mono: {
    name: 'JetBrains Mono',
    fallback: 'Consolas, Monaco, monospace',
    full: '"JetBrains Mono", Consolas, Monaco, monospace'
  }
} as const;

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
} as const;

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
  '8xl': '6rem',    // 96px
  '9xl': '8rem'     // 128px
} as const;

export type FontFamily = keyof typeof fonts;
export type FontWeight = keyof typeof fontWeights;
export type FontSize = keyof typeof fontSizes;