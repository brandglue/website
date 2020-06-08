import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import fluid from 'fluid-system';

import { customTextProps, ICustomTextProps } from '@theme/customProps';
import styled from '@theme/styled';

type StyledSystemTextProps = ColorProps & SpaceProps & TypographyProps;
type StyledSystemHeadingProps = StyledSystemTextProps & ICustomTextProps;

const P = styled.p<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

P.defaultProps = {
  fontSize: [1, null, null, null, 2, 3],
  lineHeight: [1, null, null, null, 2, 3],
};

const H1 = styled.h1<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H1.defaultProps = {
  fontSize: [4, null, 5, 6, 7, 8],
  lineHeight: [4, null, 4, 5, 6, 7],
};

const H2 = styled.h2<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H2.defaultProps = {
  fontSize: [3, null, 4, 5, 6, 7],
  lineHeight: [3, null, 3, 4, 5, 6],
};

const H3 = styled.h3<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H3.defaultProps = {
  fontSize: [2, null, 3, 4, 5, 6],
  lineHeight: [2, null, 3, 4, 5, 6],
};

const H4 = styled.h4<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H4.defaultProps = {
  fontSize: [1, null, null, 2, 3, 4],
  lineHeight: [1, null, null, 2, 3, 4],
};

const H5 = styled.h5<StyledSystemHeadingProps>`
  text-transform: uppercase;
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H5.defaultProps = {
  fontSize: [1, null, null, null, 3, 4],
  lineHeight: [1, null, null, null, 3, 4],
};

export { H1, H2, H3, H4, H5, P };
