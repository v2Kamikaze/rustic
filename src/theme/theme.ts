import {zinc} from './zinc';

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const spacings = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const light = {
  colors: zinc.light,
  radius,
  spacings,
} as const;

export const dark = {
  colors: zinc.dark,
  radius,
  spacings,
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
