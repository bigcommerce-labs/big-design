import { rem } from 'polished';

import { ThemeOptions } from '../index';

export type FontFamily = string;

export interface FontWeight {
  bold: number;
  normal: number;
  thin: number;
}

export interface FontSize {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
}

export interface Typography {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
}

export const createTypography = (options: ThemeOptions): Typography => ({
  fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
  fontSize: {
    small: rem(14, options.htmlFontSize),
    medium: rem(16, options.htmlFontSize),
    large: rem(20, options.htmlFontSize),
    xLarge: rem(24, options.htmlFontSize),
    xxLarge: rem(32, options.htmlFontSize),
    xxxLarge: rem(48, options.htmlFontSize),
  },
  fontWeight: {
    bold: 600,
    normal: 400,
    thin: 300,
  },
});
