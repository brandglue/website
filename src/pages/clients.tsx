import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash-es';
import React, { FC } from 'react';

import { Contact, Seo } from '@components/common';
import { Box, Divider, H1, Image, P } from '@components/core';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';

type Props = PageProps<GatsbyTypes.ClientsPageQuery>;

export const Clients: FC<Props> = ({ data, location }) => {
  const { edges } = data.clients;

  return (
    <>
      <Seo
        description="BrandGlue clients"
        path={location.pathname}
        title="Clients"
        type="website"
      />
      <Divider />
      <Box pb={0} variant="section">
        <H1>See the list of clients we've helped.</H1>
        <P>
          From developing social strategies to event social management, we’ve
          done a lot. Check out some of our clients below and get in touch to
          receive our most recent portfolio of work.
        </P>
      </Box>
      <Box variant="section">
        <ClientGrid>
          {edges.map(({ node: client }) => {
            const { frontmatter } = client;

            return (
              <ClientLogoWrapper key={frontmatter?.name}>
                <Image
                  alt={kebabCase(frontmatter?.name)}
                  fluid={
                    frontmatter?.logo?.childImageSharp?.fluid as FluidObject
                  }
                />
              </ClientLogoWrapper>
            );
          })}
        </ClientGrid>
      </Box>
      <Divider />
      <Contact />
    </>
  );
};

const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: minmax(20px, 150px);
  grid-gap: 60px;
  margin-bottom: ${rhythm(1)};

  ${minMediaQuery.Small(css`
    grid-template-columns: 1fr 1fr;
  `)}

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `)}

  ${minMediaQuery.Large(css`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `)}
`;

const ClientLogoWrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: ${rhythm(1)};

  & .gatsby-image-wrapper {
    flex: 1 1 0;
    min-height: 20px;
    max-height: 100% !important;
  }

  & img {
    object-fit: contain !important;
  }

  ${minMediaQuery.Small(css`
    flex-basis: 20%;
    margin-bottom: 0;
  `)}
`;

export default Clients;

export const clientsPage = graphql`
  query ClientsPage {
    clients: allMdx(
      filter: { frontmatter: { type: { eq: "client" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            logo {
              name
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`;
