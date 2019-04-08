// https://www.styled-components.com/docs/api#typescript

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ITheme } from './theme';

const {
  default: styled,
  css,
  keyframes,
  withTheme,
  ThemeProvider,
  // https://github.com/styled-components/styled-components/issues/890
} = styledComponents as ThemedStyledComponentsModule<any> as ThemedStyledComponentsModule<ITheme>;

export {
  css,
  keyframes,
  withTheme,
  ThemeProvider,
};

export default styled;