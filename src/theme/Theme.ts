export enum Breakpoints {
  zero = '0',
  tiny = '320px',
  small = '480px',
  medium = '768px',
  large = '1024px',
  giant = '1920px',
}

export enum Colors {
  blue = 'blue',
  darkBlue = '#2525b1',
  gold = 'gold',
  black = '#000',
  white = '#fff',
  mediumGray = '#888',
}

export enum FontFamilies {
  primary = 'Lato, Arial, sans-serif',
}

export enum FontSizes {
  default = '18px',
  tiny = '12px',
  small = '14px',
  h1 = '48px',
  h2 = '32px',
  h3 = '24px',
  h4 = '18px',
  h5 = '16px',
}

export enum Spacings {
  space0 = '4px',
  space1 = '8px',
  space2 = '16px',
  space3 = '24px',
  space4 = '32px',
  space5 = '48px',
}

export type IBreakpointKeys = keyof typeof Breakpoints;
export type IColorKeys = keyof typeof Colors;
export type IFontFamilyKeys = keyof typeof FontFamilies;
export type IFontSizeKeys = keyof typeof FontSizes;
export type IMarginKeys = keyof typeof Spacings;
export type IPaddingKeys = keyof typeof Spacings;

export interface ITheme {
  breakpoints: { [key in IBreakpointKeys]: string };
  colors: { [key in IColorKeys]: string };
  fontFamilies: { [key in IFontFamilyKeys]: string };
  fontSizes: { [key in IFontSizeKeys]: string };
  margin: { [key in IMarginKeys]: string };
  padding: { [key in IPaddingKeys]: string };
}

export const theme: ITheme = {
  breakpoints: Breakpoints,
  colors: Colors,
  fontFamilies: FontFamilies,
  fontSizes: FontSizes,
  margin: Spacings,
  padding: Spacings,
};
