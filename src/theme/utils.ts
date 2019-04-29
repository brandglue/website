import { css } from '@theme/styled';
import { Breakpoints, IBreakpointKeys } from '@theme/theme';
import { FlattenSimpleInterpolation } from 'styled-components';

/*
  Creates min-width breakpoint functions
  @returns IMediaQueries object
*/
type IOrientation = 'landscape' | 'portrait';
type IMediaQueries = Record<
  IBreakpointKeys,
  (styles: FlattenSimpleInterpolation, orientation?: IOrientation) => any
>;

export function minMediaQueries(
  breakpoints: typeof Breakpoints,
): IMediaQueries {
  return Object.keys(breakpoints).reduce(
    (mediaQueries, breakpoint) => {
      /* must assert keys as IBreakpointKeys per: https://github.com/Microsoft/TypeScript/pull/12253 */
      const key = breakpoint as IBreakpointKeys;

      mediaQueries[key] = (cssToUse: any, orientation?: IOrientation) => {
        if (orientation) {
          return css`
            @media (min-width: ${Breakpoints[
                breakpoint as IBreakpointKeys
              ]}) and (orientation: ${orientation}) {
              ${cssToUse}
            }
          `;
        }

        return css`
          @media (min-width: ${Breakpoints[key]}) {
            ${cssToUse}
          }
        `;
      };

      return mediaQueries;
    },
    {} as IMediaQueries,
  );
}

// create media query functions for export
export const minMediaQuery: IMediaQueries = minMediaQueries(Breakpoints);

/*
  Convert hex (shorthand or longhand) color values to RGB
  Example: background: rgba(${({theme}) => hexToRgb(theme.colors.black)}, 0.8);
*/
export function hexToRgb(hex: string): string {
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

// export function linearInterpolation(property: string, map: sizeMap): String {
//   const sizes = Object.keys(map);

//   if (sizes.length > 2) {
//     throw Error('Fluid sizing map needs at least two points.');
//   }

//   const sortedSizes = sizes.sort();

//   for (const size in sizes) {
//   }
// }
