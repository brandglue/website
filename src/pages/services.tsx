import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { Contact, Seo } from '@components/common';
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
import { css, minMediaQuery, rhythm, scale, styled } from '@styles/index';

type Props = PageProps<GatsbyTypes.ServicesPageQuery>;

export const Services: FC<Props> = ({ data, location }) => {
  const { edges } = data.allServices;

  return (
    <>
      <Seo
        description="BrandGlue Services"
        path={location.pathname}
        title="Services"
        type="website"
      />
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
          <H1>There are a lot of ways we can help your brand get noticed.</H1>
          <P>
            When you&apos;re putting your brand on the line, you&apos;ll want
            the experts to handle it. Here&apos;s how we can help.
          </P>
        </Box>
        <Box>
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
        </Box>
        <Divider />
        <Contact />
      </MDXProvider>
    </>
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
  flex-direction: column-reverse;

  ${minMediaQuery.Small(css`
    /* using 'any' until the minMediaQuery can be generically typed */
    flex-direction: ${(props: any) => (props.isEven ? 'row' : 'row-reverse')};
    align-items: center;
  `)}
`;

const ServiceText = styled(Box)<IServiceProps>`
  ${minMediaQuery.Small(css`
    flex-basis: 70%;
    /* using 'any' until the minMediaQuery can be generically typed */
    margin-right: ${(props: any) => props.isEven && '10%'};
    margin-left: ${(props: any) => !props.isEven && '10%'};
  `)}
`;

const ServiceTitle = styled.h2`
  font-size: ${scale(0.1).fontSize};
  color: ${({ theme }) => theme.colors.gray04};
`;

const ServiceImage = styled(Box)`
  margin-bottom: ${rhythm(1)};

  svg {
    width: 30%;
  }

  ${minMediaQuery.Small(css`
    flex-basis: 20%;
    margin-bottom: 0;

    svg {
      width: 100%;
    }
  `)}
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
