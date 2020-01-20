import React, { FC } from 'react';

import Box from '@components/containers/Box';
import Column from '@components/containers/Column';
import { P } from '@components/text/Text';
import { H5 } from '@components/text/Heading';
import Image from '@components/images/Image';
import { Routes } from '@constants/routes';
import intuit from '@images/logo-intuit-no-bg.png';
import styled, { css } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';
import NavTextLink from '@components/links/NavTextLink';

export const CaseStudy: FC = () => {
  return (
    <Box bg="DarkBlue" py={5}>
      <Container variant="flex">
        <Logo variant="flexItem">
          <Image alt="intuit-accountants" img={intuit} />
        </Logo>
        <Box flex="0 0 500px" variant="flexItem">
          <H5 color="Gold" m="auto" textTransform="uppercase">
            Growing Twitter the Right Way:
          </H5>
          <P color="White">
            {`See How We Helped Intuit Accountants \n Get The Right Audience at the Right Price`}
            {/* TODO: Update this link to the proper case study link */}
            <NavTextLink color="Blue" pl={1} to={`/${Routes.CaseStudies}`}>
              See Case Study &gt;
            </NavTextLink>
          </P>
        </Box>
      </Container>
    </Box>
  );
};

const Container = styled(Column)`
  flex-flow: column;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  padding: ${({ theme }) => theme.space[5]}px;

  ${minMediaQuery.Medium(css`
    flex-flow: row;
    margin-bottom: 0;
  `)};
`;

const Logo = styled(Box)`
  flex: 0 0 200px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.White};
  padding-bottom: ${({ theme }) => theme.space[5]}px;
  margin-bottom: ${({ theme }) => theme.space[5]}px;

  ${minMediaQuery.Medium(css`
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.Colors.White};
    padding: 0 ${({ theme }) => theme.space[5]}px 0 0;
    margin: 0 ${({ theme }) => theme.space[5]}px 0 0;
  `)}
`;

export default CaseStudy;
