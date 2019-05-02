import Hex, { IHex } from '@models/Hex';

export enum Breakpoints {
  zero = 0,
  tiny = 320,
  small = 480,
  medium = 768,
  large = 1024,
  giant = 1920,
}

export enum BreakpointsByKey {
  zero = 'zero',
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
  giant = 'giant',
}

// Enum doesn't support tinytypes yet so using a const instead
export const Colors = {
  blue: Hex('#005ADD'),
  darkBlue: Hex('#003575'),
  gold: Hex('#FFB000'),
  black: Hex('#000'),
  white: Hex('#fff'),
  mediumGray: Hex('#828487'),
};

export enum FontFamilies {
  primary = 'Lato, Arial, sans-serif',
}

export enum StaticSpacings {
  space0 = '4px',
  space1 = '8px',
  space2 = '16px',
  space3 = '24px',
  space4 = '32px',
  space5 = '48px',
}

// convenience types
export type IBreakpointKeys = keyof typeof Breakpoints;
export type IColorKeys = keyof typeof Colors;
export type IFontFamilyKeys = keyof typeof FontFamilies;
export type IMarginKeys = keyof typeof StaticSpacings;
export type IPaddingKeys = keyof typeof StaticSpacings;

export interface ITheme {
  breakpoints: { [key in IBreakpointKeys]: number };
  colors: { [key in IColorKeys]: IHex };
  fontFamilies: { [key in IFontFamilyKeys]: string };
  margin: { [key in IMarginKeys]: string };
  padding: { [key in IPaddingKeys]: string };
}

export const theme: ITheme = {
  breakpoints: Breakpoints,
  colors: Colors,
  fontFamilies: FontFamilies,
  margin: StaticSpacings,
  padding: StaticSpacings,
};

export enum TextTags {
  subtext = 'subtext',
  default = 'default',
  h5 = 'h5',
  h4 = 'h4',
  h3 = 'h3',
  h2 = 'h2',
  h1 = 'h1',
}

export type ITextTagKeys = keyof typeof TextTags;

export const fluidFontMatrix = (function() {
  const orderedBreakpoints = [
    BreakpointsByKey.zero,
    BreakpointsByKey.tiny,
    BreakpointsByKey.small,
    BreakpointsByKey.medium,
    BreakpointsByKey.large,
    BreakpointsByKey.giant,
  ];

  const orderedTextTags = [
    TextTags.subtext,
    TextTags.default,
    TextTags.h5,
    TextTags.h4,
    TextTags.h3,
    TextTags.h2,
    TextTags.h1,
  ];

  type ITextSizes = { [key in TextTags]: number };
  type IFluidFontMatrix = { [key in IBreakpointKeys]: ITextSizes };

  function generateFluidFontMatrix(): IFluidFontMatrix {
    const matrix = {} as IFluidFontMatrix;

    // starting fontSize used to generate the matrix in both directions
    // the value is based on the goal to have the `default` fontSize = 16 at the smallest breakpoint
    const seedBaseSize = 16 / 1.25;

    // upscaling the fontSize across the breakpoints is helpful
    // this scale is based on the Major Second Scale
    // https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54
    const breakpointScale = 1.125;

    // upscaling the fontSize across the font tags (p -> h1) is fundamental
    // this scale uses the Major Third Scale
    // https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54
    const tagScale = 1.25;

    orderedBreakpoints.forEach((breakpoint, bIndex) => {
      matrix[breakpoint] = {} as ITextSizes;

      const previousBase =
        matrix[orderedBreakpoints[bIndex - 1]] &&
        matrix[orderedBreakpoints[bIndex - 1]][orderedTextTags[0]];

      // only scale up across breakpoints at the breakpoints
      // that most likely signify a different device
      let activeBreakpointScale;
      switch (breakpoint) {
        case BreakpointsByKey.medium:
        case BreakpointsByKey.giant: {
          activeBreakpointScale = breakpointScale;
          break;
        }
        default: {
          activeBreakpointScale = 1;
        }
      }

      const currentBase = previousBase
        ? previousBase * activeBreakpointScale
        : seedBaseSize;

      orderedTextTags.forEach((size, sIndex) => {
        const previousTagBase = matrix[breakpoint][orderedTextTags[sIndex - 1]];

        matrix[breakpoint][size] = previousTagBase
          ? previousTagBase * tagScale
          : currentBase;
      });
    });

    return matrix;
  }

  return generateFluidFontMatrix();
})();
