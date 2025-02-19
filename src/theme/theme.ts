export const light = {
  colors: {
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(240, 10%, 3.9%)',
    card: 'hsl(0, 0%, 100%)',
    cardForeground: 'hsl(240, 10%, 3.9%)',
    popover: 'hsl(0, 0%, 100%)',
    popoverForeground: 'hsl(240, 10%, 3.9%)',
    primary: 'hsl(240, 5.9%, 10%)',
    primaryForeground: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
    secondaryForeground: 'hsl(240, 5.9%, 10%)',
    muted: 'hsl(240, 4.8%, 95.9%)',
    mutedForeground: 'hsl(240, 3.8%, 46.1%)',
    accent: 'hsl(240, 4.8%, 95.9%)',
    accentForeground: 'hsl(240, 5.9%, 10%)',
    destructive: 'hsl(0, 84.2%, 60.2%)',
    destructiveForeground: 'hsl(0, 0%, 98%)',
    border: 'hsl(240, 5.9%, 90%)',
    input: 'hsl(240, 5.9%, 90%)',
    ring: 'hsl(240, 5.9%, 10%)',
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  spacings: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
} as const;

export const dark = {
  colors: {
    background: 'hsl(240, 10%, 3.9%)',
    foreground: 'hsl(0, 0%, 98%)',
    card: 'hsl(240, 10%, 3.9%)',
    cardForeground: 'hsl(0, 0%, 98%)',
    popover: 'hsl(240, 10%, 3.9%)',
    popoverForeground: 'hsl(0, 0%, 98%)',
    primary: 'hsl(0, 0%, 98%)',
    primaryForeground: 'hsl(240, 5.9%, 10%)',
    secondary: 'hsl(240, 3.7%, 15.9%)',
    secondaryForeground: 'hsl(0, 0%, 98%)',
    muted: 'hsl(240, 3.7%, 15.9%)',
    mutedForeground: 'hsl(240, 5%, 64.9%)',
    accent: 'hsl(240, 3.7%, 15.9%)',
    accentForeground: 'hsl(0, 0%, 98%)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    destructiveForeground: 'hsl(0, 0%, 98%)',
    border: 'hsl(240, 3.7%, 15.9%)',
    input: 'hsl(240, 3.7%, 15.9%)',
    ring: 'hsl(240, 4.9%, 83.9%)',
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  spacings: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
} as const;

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

export const appThemes = {
  light: light,
  dark: dark,
};

export type AppBreakpoints = typeof breakpoints;
export type AppThemes = typeof appThemes;
export type Theme = typeof light;
