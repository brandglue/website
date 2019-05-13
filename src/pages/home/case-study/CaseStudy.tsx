import React, { FC, useContext } from 'react';

import NavLink from '@components/links/NavLink';
import CurvedButton from '@components/buttons/CurvedButton';
import OutlineButton from '@components/buttons/OutlineButton';
import CurvedBadge from '@components/CurvedBadge';
import Image from '@components/images/Image';
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
          <Description>
            <Headline>Growing Twitter the Right Way:</Headline>
            <Text>
              {`See How We Helped Intuit Accountants \n Get The Right Audience at the Right Price`}
            </Text>
          </Description>
        </Container>
        {appState.isSmallFormFactor ? (
          // TODO: Update this link to the proper case study link
          <SmallFormFactorCta as={NavLink} to={`/${Routes.CaseStudies}`}>
            See Case Study <StyledCaret />
          </SmallFormFactorCta>
        ) : (
          <LargeFormFactorCta as={NavLink} to={`/${Routes.CaseStudies}`}>
            See Case Study <StyledCaret />
          </LargeFormFactorCta>
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
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace05};

  ${minMediaQuery.Medium(css`
    flex-flow: row;
    align-items: center;
    margin-bottom: 0;
  `)};
`;

const Logo = styled(Image)`
  flex: 0 1 200px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.White};
  padding-bottom: ${({ theme }) => theme.Spacings.DynamicSpace02};
  margin-bottom: ${({ theme }) => theme.Spacings.DynamicSpace02};

  ${minMediaQuery.Medium(css`
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
    border-right: 1px solid ${({ theme }) => theme.Colors.White};
    padding-right: ${({ theme }) => theme.Spacings.DynamicSpace02};
    margin-right: ${({ theme }) => theme.Spacings.DynamicSpace02};
  `)}
`;

const Description = styled.div`
  ${minMediaQuery.Medium(css`
    display: flex;
    flex-flow: column;
  `)}
`;

const Headline = styled.h4`
  ${fluidFontSize.StepUp1()};
  text-transform: uppercase;
  color: ${({ theme }) => theme.Colors.Gold};
`;

const Text = styled.div`
  ${minMediaQuery.Medium(css`
    white-space: pre-wrap;
  `)}
`;

const SmallFormFactorCta = styled(OutlineButton)`
  color: ${({ theme }) => theme.Colors.Gold};
`;

const LargeFormFactorCta = styled(CurvedButton)`
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
