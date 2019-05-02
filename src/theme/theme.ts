import Hex, { IHex } from '@models/Hex';

export enum Breakpoints {
  Zero = 0,
  Tiny = 320,
  Small = 480,
  Medium = 768,
  Large = 1024,
  Giant = 1920,
}

export enum BreakpointsByKey {
  Zero = 'Zero',
  Tiny = 'Tiny',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Giant = 'Giant',
}

// Enum doesn't support tinytypes yet so using a const instead
export const Colors = {
  Blue: Hex('#005ADD'),
  DarkBlue: Hex('#003575'),
  Gold: Hex('#FFB000'),
  Black: Hex('#000'),
  White: Hex('#fff'),
  MediumGray: Hex('#828487'),
};

export enum FontFamilies {
  Primary = 'Lato, Arial, sans-serif',
}

export enum StaticSpacings {
  Space0 = '4px',
  Space1 = '8px',
  Space2 = '16px',
  Space3 = '24px',
  Space4 = '32px',
  Space5 = '48px',
}

// convenience types
export type IBreakpointKeys = keyof typeof Breakpoints;
export type IColorKeys = keyof typeof Colors;
export type IFontFamilyKeys = keyof typeof FontFamilies;
export type IMarginKeys = keyof typeof StaticSpacings;
export type IPaddingKeys = keyof typeof StaticSpacings;

export interface ITheme {
  Breakpoints: { [key in IBreakpointKeys]: number };
  Colors: { [key in IColorKeys]: IHex };
  FontFamilies: { [key in IFontFamilyKeys]: string };
  Margin: { [key in IMarginKeys]: string };
  Padding: { [key in IPaddingKeys]: string };
}

export const theme: ITheme = {
  Breakpoints,
  Colors,
  FontFamilies,
  Margin: StaticSpacings,
  Padding: StaticSpacings,
};

export enum TextTags {
  Subtext = 'Subtext',
  Default = 'Default',
  H5 = 'H5',
  H4 = 'H4',
  H3 = 'H3',
  H2 = 'H2',
  H1 = 'H1',
}

export type ITextTagKeys = keyof typeof TextTags;

export const fluidFontMatrix = (function() {
  const orderedBreakpoints = [
    BreakpointsByKey.Zero,
    BreakpointsByKey.Tiny,
    BreakpointsByKey.Small,
    BreakpointsByKey.Medium,
    BreakpointsByKey.Large,
    BreakpointsByKey.Giant,
  ];

  const orderedTextTags = [
    TextTags.Subtext,
    TextTags.Default,
    TextTags.H5,
    TextTags.H4,
    TextTags.H3,
    TextTags.H2,
    TextTags.H1,
  ];

  type ITextSizes = { [key in TextTags]: number };
  type IFluidFontMatrix = { [key in IBreakpointKeys]: ITextSizes };

  function generateFluidFontMatrix(): IFluidFontMatrix {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
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
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      matrix[breakpoint] = {} as ITextSizes;

      const baseTag = orderedTextTags[0];

      // only scale up across breakpoints at the breakpoints that most likely signify a different device
      let activeBreakpointScale;
      switch (breakpoint) {
        case BreakpointsByKey.Medium:
        case BreakpointsByKey.Giant: {
          activeBreakpointScale = breakpointScale;
          break;
        }
        default: {
          activeBreakpointScale = 1;
        }
      }

      // find the base text size that sets the pattern for each breakpoint size
      let currentBaseSize = 0;
      if (bIndex === 0) {
        currentBaseSize = seedBaseSize;
      } else {
        const previousBreakpoint = orderedBreakpoints[bIndex - 1];
        const previousBaseTag = matrix[previousBreakpoint][baseTag];
        currentBaseSize = previousBaseTag * activeBreakpointScale;
      }

      orderedTextTags.forEach((tag, tIndex) => {
        const previousTextTag = matrix[breakpoint][orderedTextTags[tIndex - 1]];

        matrix[breakpoint][tag] = previousTextTag
          ? previousTextTag * tagScale
          : currentBaseSize;
      });
    });

    return matrix;
  }

  return generateFluidFontMatrix();
})();
