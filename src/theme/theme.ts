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
  Page = '10%',
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

export enum TypeScaleByKeys {
  StepUp8 = 'StepUp8',
  StepUp7 = 'StepUp7',
  StepUp6 = 'StepUp6',
  StepUp5 = 'StepUp5',
  StepUp4 = 'StepUp4',
  StepUp3 = 'StepUp3',
  StepUp2 = 'StepUp2',
  StepUp1 = 'StepUp1',
  Baseline = 'Baseline',
  StepDown1 = 'StepDown1',
  StepDown2 = 'StepDown2',
  StepDown3 = 'StepDown3',
  StepDown4 = 'StepDown4',
}

export const fluidFontMatrix = (function() {
  // Uses the Golden Ratio
  const typeRatio = 1.618;

  // Uses the Golden Ditonic Scale, which doubles every other factor
  // https://blog.envylabs.com/responsive-typographic-scales-in-css-b9f60431d1c4
  const doublingFactor = 2;

  // Sets the step factor used to compute the type scale
  const typeScaleByStep = {
    [TypeScaleByKeys.StepUp8]: 8,
    [TypeScaleByKeys.StepUp7]: 7,
    [TypeScaleByKeys.StepUp6]: 6,
    [TypeScaleByKeys.StepUp5]: 5,
    [TypeScaleByKeys.StepUp4]: 4,
    [TypeScaleByKeys.StepUp3]: 3,
    [TypeScaleByKeys.StepUp2]: 2,
    [TypeScaleByKeys.StepUp1]: 1,
    [TypeScaleByKeys.Baseline]: 1, // special, gets handled separately below
    [TypeScaleByKeys.StepDown1]: -1,
    [TypeScaleByKeys.StepDown2]: -2,
    [TypeScaleByKeys.StepDown3]: -3,
    [TypeScaleByKeys.StepDown4]: -4,
  };

  // roughly uses a 1.125 breakpoint scale
  // upscaling the fontSize across the breakpoints is helpful
  // however only scale up across breakpoints that most likely signify a different device
  const baselineFontSizeByBreakpoint = {
    [BreakpointsByKey.Zero]: 16,
    [BreakpointsByKey.Tiny]: 16,
    [BreakpointsByKey.Small]: 16,
    [BreakpointsByKey.Medium]: 18,
    [BreakpointsByKey.Large]: 18,
    [BreakpointsByKey.Giant]: 20.25,
  };

  type ITypeScaleKeys = keyof typeof TypeScaleByKeys;
  type IFontSizes = { [key in TypeScaleByKeys]: number };
  type IFluidFontMatrix = { [key in IBreakpointKeys]: IFontSizes };

  function generateFluidFontMatrix(): IFluidFontMatrix {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const matrix = {} as IFluidFontMatrix;

    const breakpointKeys = Object.keys(BreakpointsByKey) as IBreakpointKeys[];
    const typeScaleKeys = Object.keys(TypeScaleByKeys) as ITypeScaleKeys[];

    breakpointKeys.forEach(breakpoint => {
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      matrix[breakpoint] = {} as IFontSizes;

      const baselineFontSize = baselineFontSizeByBreakpoint[breakpoint];

      typeScaleKeys.forEach(typeScale => {
        if (typeScale === TypeScaleByKeys.Baseline) {
          matrix[breakpoint][typeScale] = baselineFontSize;
        } else {
          const step = typeScaleByStep[typeScale];
          matrix[breakpoint][typeScale] =
            typeRatio ** (step / doublingFactor) * baselineFontSize;
        }
      });
    });

    return matrix;
  }

  return generateFluidFontMatrix();
})();
