export const theme = {
  colors: {
    bg: '#0C0C0C',
    surface: '#141414',
    border: '#262626',
    text: '#FAFAF8',
    textMuted: '#737373',
    accent: '#C9A227',
    accentDim: 'rgba(201, 162, 39, 0.25)',
    done: '#404040',
    danger: '#A63D40',
  },
  typography: {
    titleSize: 32,
    titleLetterSpacing: -0.5,
    bodySize: 16,
    captionSize: 13,
    labelLetterSpacing: 0.5,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  radius: {
    sm: 6,
    md: 10,
    full: 9999,
  },
} as const;

export type Theme = typeof theme;
