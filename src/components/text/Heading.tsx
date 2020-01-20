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

type StyledSystemProps = ColorProps &
  SpaceProps &
  TypographyProps &
  ICustomTextProps;

const H1 = styled.h1<StyledSystemProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H1.defaultProps = {
  fontSize: [4, null, 5, 6, 7, 8],
  lineHeight: [4, null, 5, 6, 7, 8],
};

const H2 = styled.h2<StyledSystemProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H2.defaultProps = {
  fontSize: [3, null, 4, 5, 6, 7],
  lineHeight: [3, null, 4, 5, 6, 7],
};

const H3 = styled.h3<StyledSystemProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H3.defaultProps = {
  fontSize: [2, null, 3, 4, 5, 6],
  lineHeight: [2, null, 3, 4, 5, 6],
};

const H4 = styled.h4<StyledSystemProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;

H4.defaultProps = {
  fontSize: [1, null, null, 2, 3, 4],
  lineHeight: [1, null, null, 2, 3, 4],
};

const H5 = styled.h5<StyledSystemProps>`
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

export { H1, H2, H3, H4, H5 };
