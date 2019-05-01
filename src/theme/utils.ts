import { css } from '@theme/styled';
import {
  Breakpoints,
  BreakpointsByKey,
  fluidFontMatrix,
  IBreakpointKeys,
  ITextTagKeys,
  TextTags,
} from '@theme/theme';
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

      mediaQueries[key] = (cssToUse, orientation?) => {
        if (orientation) {
          return css`
            @media (min-width: ${Breakpoints[
                breakpoint as IBreakpointKeys
              ]}px) and (orientation: ${orientation}) {
              ${cssToUse}
            }
          `;
        }

        return css`
          @media (min-width: ${Breakpoints[key]}px) {
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

  // TODO: convert this to use a Hex tinytype
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
  Inspiration: https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/
*/
export const fluidFontSize = (function() {
  type IFluidFontSizes = Record<ITextTagKeys, () => any>;

  function generateFluidFontSizes(): IFluidFontSizes {
    const textTagKeys = Object.keys(TextTags) as ITextTagKeys[];

    return textTagKeys.reduce(
      (fluidFontSizes, tag) => {
        fluidFontSizes[tag] = () => {
          const breakpointKeys = Object.keys(
            BreakpointsByKey,
          ) as IBreakpointKeys[];

          const basefontSize = fluidFontMatrix[BreakpointsByKey.zero][tag];
          let styles = [`font-size: ${basefontSize}px`];

          breakpointKeys.forEach((currentBreakpoint, index) => {
            // ignore the base case since this was handled above
            if (currentBreakpoint === BreakpointsByKey.zero) return;

            const currentBreakpointWidth = Breakpoints[currentBreakpoint];
            const currentSize = fluidFontMatrix[currentBreakpoint][tag];
            const nextBreakpointWidth = Breakpoints[breakpointKeys[index + 1]];
            const nextSize =
              nextBreakpointWidth &&
              fluidFontMatrix[breakpointKeys[index + 1]][tag];

            if (nextSize) {
              // compute linear interpolation
              const slope =
                (nextSize - currentSize) /
                (nextBreakpointWidth - currentBreakpointWidth);
              const yIntercept = currentSize - slope * currentBreakpointWidth;
              const sign = yIntercept > 0 ? '+' : '-';

              const fontSize = `calc(${slope * 100}vw ${sign} ${Math.abs(
                yIntercept,
              )}px)`;

              styles.push(generateMediaQuery(currentBreakpoint, fontSize));
            } else {
              styles.push(
                generateMediaQuery(currentBreakpoint, `${currentSize}px`),
              );
            }
          });

          return css`
            ${styles.join('\n')}
          `;
        };

        return fluidFontSizes;
      },
      {} as IFluidFontSizes,
    );
  }

  function generateMediaQuery(
    breakpointKey: IBreakpointKeys,
    fontSize: string,
  ): string {
    return `@media (min-width: ${Breakpoints[breakpointKey]}px) {
        font-size: ${fontSize};
      }
    `;
  }

  return generateFluidFontSizes();
})();
