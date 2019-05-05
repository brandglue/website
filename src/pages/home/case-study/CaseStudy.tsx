import React, { FC } from 'react';

import ButtonCurved from '@components/ButtonCurved';
import CurvedBadge from '@components/CurvedBadge';
import Image from '@components/Image';
import Caret from '@icons/Caret';
import intuit from '@images/logo-intuit.jpg';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const CaseStudy: FC = () => (
  <>
    <CurvedBadge>
      <Title>Featured Case Study</Title>
    </CurvedBadge>
    <Divider>
      <Wrapper>
        <Logo alt="intuit-accountants" img={intuit} />
        <Text>
          <Headline>Growing Twitter the Right Way:</Headline>
          <div>
            See How We Helped Intuit Accountants
            <br /> Get The Right Audience at the Right Price
          </div>
        </Text>
      </Wrapper>
      <CtaButton>
        See More Case Studies <StyledCaret />
      </CtaButton>
    </Divider>
  </>
);

const Divider = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: ${theme.Colors.DarkBlue};
    color: ${theme.Colors.White};
    padding: ${theme.Spacings.StaticSpace03} 0 ${theme.Spacings.StaticSpace12};
  `};
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  margin-left: ${({ theme }) => theme.Spacings.Page};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Image)`
  flex: 0 1 200px;
  margin-right: ${({ theme }) => theme.Spacings.DynamicSpace02};
`;

const Text = styled.div`
  padding-left: ${({ theme }) => theme.Spacings.DynamicSpace02};
  border-left: 1px solid ${({ theme }) => theme.Colors.White};
`;

const Headline = styled.h4`
  color: ${({ theme }) => theme.Colors.Gold};
  text-transform: uppercase;
  ${fluidFontSize.StepUp1()};
`;

const CtaButton = styled(ButtonCurved)`
  position: absolute;
  bottom: 0;
  right: ${({ theme }) => theme.Spacings.DynamicSpace09};
  color: ${({ theme }) => theme.Colors.Gold};
`;

const StyledCaret = styled(Caret)`
  transform: rotate(90deg);
`;

export default CaseStudy;
