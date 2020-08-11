import Hex, { IHex } from '@models/Hex';

export enum Breakpoints {
  Zero = 0,
  Small = 480,
  Medium = 768,
  Large = 1024,
  Giant = 1920,
  SuperNova = 2560,
}

const colors = {
  blue: Hex('#005ADD'),
  darkBlue: Hex('#003575'),
  lightBlue: Hex('#dbe9ff'),
  gold: Hex('#FFB000'),
  green: Hex('#20af32'),
  red: Hex('#c30909'),
  black: Hex('#000'),
  white: Hex('#fff'),
  gray00: Hex('#f5f5f5'),
  gray01: Hex('#e2e2e2'),
  gray02: Hex('#d5d6d6'),
  gray03: Hex('#b1b3b5'),
  gray04: Hex('#828487'),
  gray05: Hex('#666'),
  gray06: Hex('#333'),
};

const spacings = {
  maxColWidth: '1100px',
  maxPageWidth: '2560px',
};

/*** styled-system support ***/
const breakpoints = [
  `${Breakpoints.Small}px`,
  `${Breakpoints.Medium}px`,
  `${Breakpoints.Large}px`,
  `${Breakpoints.Giant}px`,
  `${Breakpoints.SuperNova}px`,
];

const systemSpacings = [0, 4, 7, 11, 17, 27, 44, 70, 113];

export interface ITheme {
  breakpoints: string[];
  colors: { [key in keyof typeof colors]: IHex };
  space: number[];
  spacings: { [key in keyof typeof spacings]: string };
}

export const theme: ITheme = {
  breakpoints, // don't use directly, only indirectly via styled-system
  colors,
  space: systemSpacings, // don't use directly, only indirectly via styled-system
  spacings,
};
