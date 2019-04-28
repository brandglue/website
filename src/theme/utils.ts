import { css } from '@theme/styled';
import { Breakpoints, IBreakpointKeys, ITheme } from '@theme/theme';

interface Props {
  theme: ITheme;
}

export interface IOrientation {
  landscape: 'landscape';
  portrait: 'portrait';
}

// TODO: type the keys as IBreakpointKeys
export interface IMediaQueries {
  [key: string]: Function;
}

/*
  Creates min-width breakpoint functions
  @returns IMediaQueries object
*/
export function mediaQuery(breakpoints: Breakpoints): IMediaQueries {
  return Object.keys(breakpoints).reduce(
    (mediaQueries, breakpoint) => {
      mediaQueries[breakpoint] = (
        orientation: IOrientation,
        ...styles: string[]
      ) => {
        if (orientation) {
          return css`
            @media (min-width: ${Breakpoints[breakpoint as IBreakpointKeys]}) {
              /* https://stackoverflow.com/questions/34179897/typescript-and-spread-operator */
              // @ts-ignore
              ${css(...styles)}
            }
          `;
        }

        return css`
          @media (min-width: ${Breakpoints[breakpoint as IBreakpointKeys]}) {
            /* https://stackoverflow.com/questions/34179897/typescript-and-spread-operator */
            // @ts-ignore
            ${css(...styles)}
          }
        `;
      };

      return mediaQueries;
    },
    {} as IMediaQueries,
  );
}

// /*
//   Breakpoint function
// */
// export function mediaMin(
//   breakpoint: IBreakpointKeys,
//   cssToUse: string,
//   orientation: IOrientation,
// ) {
//   return (props: Props) => {
//     const mediaSize = props.theme.breakpoints[breakpoint];

//     if (orientation) {
//       return css`
//         @media (min-width: ${mediaSize}px and orientation: ${orientation}) {
//           ${cssToUse}
//       }`;
//     }

//     return css`
//       @media (min-width: ${mediaSize}px) {
//         ${cssToUse};
//       }
//     `;
//   };
// }

/*
  Convert hex (shorthand or longhand) color values to RGB
  Example: background: rgba(${({theme}) => hexToRgb(theme.colors.black)}, 0.8);
*/
export function hexToRgb(hex: String): String {
  const hexChars = 'a-f\\d';
  const match3 = `#?[${hexChars}]{3}`;
  const match6 = `#?[${hexChars}]{6}`;
  const nonHexChars = new RegExp(`[^#${hexChars}]`, 'gi');
  const validHexSize = new RegExp(`^${match3}$|^${match6}$`, 'i');

  if (
    typeof hex !== 'string' ||
    nonHexChars.test(hex) ||
    !validHexSize.test(hex)
  ) {
    throw new TypeError('Expected a valid hex string');
  }

  let hexValue = hex.replace(/^#/, '');

  if (hexValue.length === 3) {
    hexValue =
      hexValue[0] +
      hexValue[0] +
      hexValue[1] +
      hexValue[1] +
      hexValue[2] +
      hexValue[2];
  }

  const num = parseInt(hexValue, 16);
  const red = (num >> 16) & 255;
  const green = (num >> 8) & 255;
  const blue = num & 255;

  return `${red},${green},${blue}`;
}

/*
  Pixel-based fluid sizing function
  Takes at least two points and uses linear-interpolation to estimate the full line
  Src: https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/
  @returns Pixel value in string form
*/
interface sizeMap {
  [size: number]: number;
}

export function linearInterpolation(property: string, map: sizeMap): String {
  const sizes = Object.keys(map);

  if (sizes.length > 2) {
    throw Error('Fluid sizing map needs at least two points.');
  }

  const sortedSizes = sizes.sort();

  for (const size in sizes) {
  }
}
