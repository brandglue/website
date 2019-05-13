import React, { FC, useContext } from 'react';

import Anchor from '@components/Anchor';
import ButtonCurved from '@components/ButtonCurved';
import ButtonOutline from '@components/ButtonOutline';
import CurvedBadge from '@components/CurvedBadge';
import Image from '@components/Image';
import { Routes } from '@constants/routes';
import Caret from '@icons/Caret';
import intuit from '@images/logo-intuit.jpg';
import { AppState } from '@src/AppState';
import styled, { css } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const CaseStudy: FC = () => {
  const appState = useContext(AppState);

  return (
    <>
      <CurvedBadge>
        <Title>Featured Case Study</Title>
      </CurvedBadge>
      <PageDivider>
        <Container>
          <Logo alt="intuit-accountants" img={intuit} />
          <Divider />
          <Headline>Growing Twitter the Right Way:</Headline>
          <Text>
            {`See How We Helped Intuit Accountants \n Get The Right Audience at the Right Price`}
          </Text>
        </Container>
        {appState.isMobile ? (
          // TODO: Update this link to the proper case study link
          <MobileCta as={Anchor} to={`/${Routes.CaseStudies}`}>
            See Case Study <StyledCaret />
          </MobileCta>
        ) : (
          <DesktopCta as={Anchor} to={`/${Routes.CaseStudies}`}>
            See Case Study <StyledCaret />
          </DesktopCta>
        )}
      </PageDivider>
    </>
  );
};

const Title = styled.h3`
  ${fluidFontSize.StepDown1()};
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 0 ${({ theme }) => theme.Spacings.Page};
`;

const PageDivider = styled.div`
  ${({ theme }) => css`
    background: ${theme.Colors.DarkBlue};
    color: ${theme.Colors.White};
    padding: ${theme.Spacings.StaticSpace05} ${theme.Spacings.StaticSpace03};

    ${minMediaQuery.Medium(css`
      position: relative;
      padding: ${theme.Spacings.StaticSpace03} 0 ${theme.Spacings.StaticSpace15};
    `)}
  `};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace05};

  ${minMediaQuery.Medium(css`
    flex-flow: row;
  `)};
`;

const Logo = styled(Image)`
  flex: 0 1 200px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.White};
  margin: ${({ theme }) => theme.Spacings.DynamicSpace02} 0;

  ${minMediaQuery.Medium(css`
    width: 1px;
    height: 100%;
  `)}
`;

const Text = styled.div`
  ${minMediaQuery.Medium(css`
    white-space: pre-wrap;
  `)}
`;

const Headline = styled.h4`
  ${fluidFontSize.StepUp1()};
  text-transform: uppercase;
  color: ${({ theme }) => theme.Colors.Gold};
`;

const MobileCta = styled(ButtonOutline)`
  color: ${({ theme }) => theme.Colors.Gold};
`;

const DesktopCta = styled(ButtonCurved)`
  position: absolute;
  bottom: 0;
  right: ${({ theme }) => theme.Spacings.DynamicSpace09};
  color: ${({ theme }) => theme.Colors.Gold};
`;

const StyledCaret = styled(Caret)`
  width: 20px;
  transform: rotate(90deg);
`;

export default CaseStudy;
