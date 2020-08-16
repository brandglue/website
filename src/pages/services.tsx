import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Breadcrumbs, Contact, ServicesGrid } from '@components/common';
import { Box, Divider, H1, Image, P } from '@components/core';
import { ServicesPageQuery } from '@generated/graphql';

interface IProps {
  data: ServicesPageQuery;
  pageContext: any;
}

export const Services: FC<IProps> = ({ data, pageContext }) => {
  const hero = data.hero?.childImageSharp?.fluid;

  return (
    <>
      <Image alt="page-hero" fluid={hero as FluidObject} />
      <Box variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <H1>There&apos;s a lot of ways we can help your brand get noticed.</H1>
        <P>
          And when you are putting your brand on the line, you&apos;ll want the
          experts to handle it. Here&apos;s how we can help.
        </P>
        <ServicesGrid />
      </Box>
      <Divider />
      <Contact />
    </>
  );
};

export default Services;

export const servicesPage = graphql`
  query ServicesPage {
    hero: file(
      sourceInstanceName: { eq: "media" }
      relativePath: { eq: "images/hero-services.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
