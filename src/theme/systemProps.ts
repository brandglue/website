import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  system,
} from 'styled-system';

interface ICustomTextProps {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces';
}

export type StyledSystemTextProps = ColorProps &
  SpaceProps &
  TypographyProps &
  ICustomTextProps & { variant?: string };

export type StyledSystemLayoutProps = BorderProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps & { variant?: string };

export type StyledSystemProps = StyledSystemTextProps & StyledSystemLayoutProps;

export const customText = system({
  textTransform: true,
  whiteSpace: true,
});
