import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Box, Divider, H1, P } from '@components/core';
import {
  AudiencePersonas,
  CommunityManagement,
  ContentStrategy,
  CustomerService,
  DataAnalysis,
  GraphicDesign,
  NewsfeedOptimization,
  PaidAdvertising,
  SocialStrategy,
} from '@media/svg';
import { scale, styled } from '@styles/index';

interface IProps {
  data: GatsbyTypes.ServicesPageQuery;
}

export const Services: FC<IProps> = ({ data }) => {
  const { edges } = data.allServices;

  return (
    <MDXProvider
      components={{
        AudiencePersonas,
        CommunityManagement,
        ContentStrategy,
        CustomerService,
        DataAnalysis,
        GraphicDesign,
        NewsfeedOptimization,
        PaidAdvertising,
        SocialStrategy,
      }}
    >
      <Divider />
      <Box pb={0} variant="section">
        <H1>There&apos;s a lot of ways we can help your brand get noticed.</H1>
        <P>
          And when you are putting your brand on the line, you&apos;ll want the
          experts to handle it. Here&apos;s how we can help.
        </P>
      </Box>
      {edges.map(({ node: service }, index) => {
        const { frontmatter } = service;
        const isEven = index % 2 === 0;
        return (
          <ServiceWrapper key={frontmatter?.title}>
            <Service isEven={isEven} variant="section">
              <ServiceText isEven={isEven}>
                <ServiceTitle>{frontmatter?.title}</ServiceTitle>
                <h3>{frontmatter?.shortDescription}</h3>
                <p>{frontmatter?.longDescription}</p>
              </ServiceText>
              <ServiceImage>
                {frontmatter?.icon && (
                  <MDXRenderer>{frontmatter.icon}</MDXRenderer>
                )}
              </ServiceImage>
            </Service>
          </ServiceWrapper>
        );
      })}
      <Divider />
      <Contact />
    </MDXProvider>
  );
};

const ServiceWrapper = styled(Box)`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.gray00};
  }
`;

interface IServiceProps {
  isEven: boolean;
}

const Service = styled(Box)<IServiceProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isEven }) => (isEven ? 'row' : 'row-reverse')};
`;

const ServiceText = styled(Box)<IServiceProps>`
  flex-basis: 70%;
  margin-right: ${({ isEven }) => isEven && '10%'};
  margin-left: ${({ isEven }) => !isEven && '10%'};
`;

const ServiceTitle = styled.h2`
  font-size: ${scale(0.1).fontSize};
  color: ${({ theme }) => theme.colors.gray04};
  letter-spacing: 1px;
`;

const ServiceImage = styled(Box)`
  flex-basis: 20%;
`;

export default Services;

export const servicesPage = graphql`
  query ServicesPage {
    allServices: allMdx(
      filter: { frontmatter: { type: { eq: "service" } } }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      edges {
        node {
          frontmatter {
            title
            shortDescription
            longDescription
            icon
          }
        }
      }
    }
  }
`;
