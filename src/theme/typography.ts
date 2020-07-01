import Typography from 'typography';

import { theme } from './theme';

export default new Typography({
  baseFontSize: '24px',
  baseLineHeight: 1.666,
  headerFontFamily: theme.fontFamilies.primary.split(','),
  bodyFontFamily: theme.fontFamilies.primary.split(','),
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400', '400i', '700'],
    },
  ],
});
