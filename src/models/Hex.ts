import { Opaque } from '@utils/opaque';

declare const HexSymbol: unique symbol;

/**
 * Hex tinytype that wraps a hex color code
 */
export type IHex = Opaque<string, typeof HexSymbol>;

function HexFactory(hex: string) {
  const hexChars = 'a-f\\d';
  const matchShorthand = `#?[${hexChars}]{3}`;
  const matchLonghand = `#?[${hexChars}]{6}`;
  const nonHexChars = new RegExp(`[^#${hexChars}]`, 'gi');
  const validHexSize = new RegExp(
    `^${matchShorthand}$|^${matchLonghand}$`,
    'i',
  );

  if (nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError('Invalid hex string');
  }

  return hex as IHex;
}

export default HexFactory;
