import * as sc from 'styled-components';

import { IHex } from '@models/Hex';
import { css, Breakpoints, ITheme } from '@styles/index';

/*
  Creates object with min-width media query functions for each breakpoint
  @returns IMediaQueries object
*/
export const minMediaQuery = (function () {
  type IOrientation = 'landscape' | 'portrait';
  type ICss = (
    styles:
      | sc.SimpleInterpolation[]
      | sc.FlattenInterpolation<sc.ThemeProps<ITheme>>,
    orientation?: IOrientation,
  ) =>
    | sc.FlattenSimpleInterpolation
    | sc.FlattenInterpolation<sc.ThemeProps<ITheme>>;

  type IBreakpointKeys = keyof typeof Breakpoints;
  type IMediaQueries = Record<IBreakpointKeys, ICss>;

  function generateMinMediaQueries(): IMediaQueries {
    /* must assert keys as desired type per: https://github.com/Microsoft/TypeScript/pull/12253 */
    const breakpointKeys = Object.keys(Breakpoints) as IBreakpointKeys[];

    return breakpointKeys.reduce((mediaQueries, breakpoint) => {
      mediaQueries[breakpoint] = (cssToUse, orientation?) => {
        if (orientation) {
          return css`
            @media (min-width: ${Breakpoints[
                breakpoint
              ]}px) and (orientation: ${orientation}) {
              ${cssToUse}
            }
          `;
        }

        return css`
          @media (min-width: ${Breakpoints[breakpoint]}px) {
            ${cssToUse}
          }
        `;
      };

      return mediaQueries;
    }, {} as IMediaQueries);
  }

  return generateMinMediaQueries();
})();

/*
  Convert hex (shorthand or longhand) color values to RGB
  Example: background: rgba(${({theme}) => hexToRgb(theme.colors.black)}, 0.8);
*/
export function hexToRgb(hex: IHex): string {
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
