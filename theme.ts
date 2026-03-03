export const theme = {
  colors: {
    bg: '#FAFBFC',
    surface: '#FFFFFF',
    border: '#E8EAED',
    text: '#1A1A1A',
    textMuted: '#6B7280',
    accent: '#2563EB',
    accentDim: 'rgba(37, 99, 235, 0.12)',
    done: '#9CA3AF',
    danger: '#DC2626',
    dangerDim: 'rgba(220, 38, 38, 0.08)',
  },
  typography: {
    titleSize: 28,
    titleWeight: '600' as const,
    bodySize: 16,
    bodyWeight: '400' as const,
    captionSize: 13,
    captionWeight: '500' as const,
  },
  spacing: {
    xs: 4,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  radius: {
    sm: 8,
    md: 12,
    full: 9999,
  },
} as const;

export type Theme = typeof theme;
