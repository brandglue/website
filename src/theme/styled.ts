// https://www.styled-components.com/docs/api#typescript

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ITheme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeContext,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeContext,
  ThemeProvider,
};

export default styled;
