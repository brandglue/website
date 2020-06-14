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

export type StyledSystemProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps & { variant?: string } & ICustomTextProps;

export const customText = system({
  textTransform: true,
  whiteSpace: true,
});
