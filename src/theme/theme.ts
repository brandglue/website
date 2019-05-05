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
  Gray: Hex('#828487'),
};

export enum FontFamilies {
  Primary = 'Lato, Arial, sans-serif',
}

export enum Spacings {
  StaticSpace00 = '5px',
  StaticSpace01 = '10px',
  StaticSpace02 = '15px',
  StaticSpace03 = '20px',
  StaticSpace04 = '25px',
  StaticSpace05 = '30px',
  StaticSpace06 = '35px',
  StaticSpace07 = '40px',
  StaticSpace08 = '45px',
  StaticSpace09 = '50px',
  StaticSpace10 = '55px',
  StaticSpace11 = '60px',
  StaticSpace12 = '65px',
  StaticSpace13 = '70px',
  StaticSpace14 = '75px',
  StaticSpace15 = '80px',
  StaticSpace16 = '85px',
  StaticSpace17 = '90px',
  StaticSpace18 = '95px',
  StaticSpace19 = '100px',
  DynamicSpace00 = '2vw',
  DynamicSpace01 = '4vw',
  DynamicSpace02 = '6vw',
  DynamicSpace03 = '8vw',
  DynamicSpace04 = '10vw',
  DynamicSpace05 = '12vw',
  DynamicSpace06 = '14vw',
  DynamicSpace07 = '16vw',
  DynamicSpace08 = '18vw',
  DynamicSpace09 = '20vw',
  Page = '10vw', // special case for typical page padding
  FontSpace00 = '0.2em',
  FontSpace01 = '0.4em',
  FontSpace02 = '0.6em',
  FontSpace03 = '0.8em',
  FontSpace04 = '1em',
  FontSpace05 = '1.2em',
  FontSpace06 = '1.6em',
  FontSpace07 = '1.4em',
  FontSpace08 = '1.8em',
  FontSpace09 = '2em',
}

// convenience types
export type IBreakpointKeys = keyof typeof Breakpoints;
export type IColorKeys = keyof typeof Colors;
export type IFontFamilyKeys = keyof typeof FontFamilies;
export type ISpacingsKeys = keyof typeof Spacings;

export interface ITheme {
  Breakpoints: { [key in IBreakpointKeys]: number };
  Colors: { [key in IColorKeys]: IHex };
  FontFamilies: { [key in IFontFamilyKeys]: string };
  Spacings: { [key in ISpacingsKeys]: string };
}

export const theme: ITheme = {
  Breakpoints,
  Colors,
  FontFamilies,
  Spacings,
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
