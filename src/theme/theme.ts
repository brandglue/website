import Hex, { IHex } from '@models/Hex';

const breakpoints = ['480px', '768px', '1024px', '1920px', '2560px'];
const fontSizes = [13, 16, 20, 26, 33, 42, 53, 68, 86];
const lineHeights = [22, 27, 33, 41, 51, 64, 84, 106, 133];
const space = [0, 4, 7, 11, 17, 27, 44, 70, 113];

const maxColWidth = 1250;
const hzColPadding = 17;
const maxPageWidth = 2560;

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
  XLarge = 'XLarge',
  Giant = 'Giant',
  SuperNova = 'SuperNova',
}

// Enum doesn't support tinytypes yet so using a const instead
export const Colors = {
  Blue: Hex('#005ADD'),
  DarkBlue: Hex('#003575'),
  Gold: Hex('#FFB000'),
  Green: Hex('#20af32'),
  Red: Hex('#c30909'),
  Black: Hex('#000'),
  White: Hex('#fff'),
  Gray00: Hex('#d5d6d6'),
  Gray01: Hex('#b1b3b5'),
  Gray02: Hex('#828487'),
  Gray03: Hex('#666'),
  Gray04: Hex('#333'),
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
  breakpoints: string[];
  Breakpoints: { [key in IBreakpointKeys]: number };
  colors: { [key in IColorKeys]: IHex };
  Colors: { [key in IColorKeys]: IHex };
  FontFamilies: { [key in IFontFamilyKeys]: string };
  fontSizes: number[];
  hzColPadding: number;
  lineHeights: number[];
  maxColWidth: number;
  maxPageWidth: number;
  space: number[];
  Spacings: { [key in ISpacingsKeys]: string };
}

export const theme: ITheme = {
  breakpoints,
  Breakpoints,
  colors: Colors,
  Colors,
  FontFamilies,
  fontSizes,
  hzColPadding,
  lineHeights,
  maxColWidth,
  maxPageWidth,
  space,
  Spacings,
};
