import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Contact as ContactForm } from '@components/common';
import { Image } from '@components/core';
import { ContactPageQuery } from '@generated/graphql';

interface IProps {
  data: ContactPageQuery;
}

export const Contact: FC<IProps> = ({ data }) => {
  const hero = data.hero?.childImageSharp?.fluid;

  return (
    <>
      <Image alt="page-hero" fluid={hero as FluidObject} />
      <ContactForm isPage />
    </>
  );
};

export default Contact;

export const contactPage = graphql`
  query ContactPage {
    hero: file(
      sourceInstanceName: { eq: "media" }
      relativePath: { eq: "images/hero-contact.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
