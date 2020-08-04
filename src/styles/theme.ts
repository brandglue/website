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

const pixelSpacings = {
  pixelSpace00: '0px',
  pixelSpace01: '5px',
  pixelSpace02: '10px',
  pixelSpace03: '15px',
  pixelSpace04: '20px',
  pixelSpace05: '25px',
  pixelSpace06: '30px',
  pixelSpace07: '35px',
  pixelSpace08: '40px',
  pixelSpace09: '45px',
  pixelSpace10: '50px',
};

const viewportSpacings = {
  viewportSpace00: '2vw',
  viewportSpace01: '4vw',
  viewportSpace02: '6vw',
  viewportSpace03: '8vw',
  viewportSpace04: '10vw',
  viewportSpace05: '12vw',
  viewportSpace06: '14vw',
  viewportSpace07: '16vw',
  viewportSpace08: '18vw',
  viewportSpace09: '20vw',
};

const emSpacings = {
  emSpace00: '0.2em',
  emSpace01: '0.4em',
  emSpace02: '0.6em',
  emSpace03: '0.8em',
  emSpace04: '1em',
  emSpace05: '1.2em',
  emSpace06: '1.4em',
  emSpace07: '1.6em',
  emSpace08: '1.8em',
  emSpace09: '2em',
};

const specialSpacings = {
  hzColPadding: '17px',
  maxColWidth: '1100px',
  maxPageWidth: '2560px',
};

const spacings = {
  ...emSpacings,
  ...pixelSpacings,
  ...specialSpacings,
  ...viewportSpacings,
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
