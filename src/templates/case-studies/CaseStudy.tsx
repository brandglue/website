import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { FilePdf } from '@styled-icons/boxicons-solid';

import { CaseStudyQuery } from '@generated/graphql';
import { Anchor, Box, Image, SwitchLink, H1 } from '@components/core';
import { Hero } from '@components/common';
import { rhythm } from '@theme/globalStyles';
import { styled, css } from '@theme/styled';
import { hexToRgb } from '@theme/utils';

interface IProps {
  data: CaseStudyQuery;
}

export const CaseStudy: React.FC<IProps> = ({ data: { mdx } }) => {
  if (!mdx?.frontmatter || !mdx.body) {
    return null;
  }

  const { body, frontmatter } = mdx;

  const download = frontmatter.attachments?.find((attachment) =>
    attachment?.publicURL?.search(/.pdf$/),
  );

  return (
    <MDXProvider
      components={{
        // eslint-disable-next-line react/display-name
        a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
          <SwitchLink {...props} />
        ),
      }}
    >
      <Hero />
      <Box variant="section">
        <Header>
          <Logo variant="flexItem">
            {frontmatter.logo?.childImageSharp?.fluid && (
              <Image
                alt={frontmatter.logo?.name}
                fluid={frontmatter.logo?.childImageSharp?.fluid as FluidObject}
              />
            )}
          </Logo>
          <HeaderContent variant="flexItem">
            <H1>{frontmatter.title}</H1>
            {download?.publicURL && (
              <Download
                download={frontmatter.filename}
                href={download.publicURL}
              >
                Download the case study
                <StyledFilePdf />
              </Download>
            )}
          </HeaderContent>
        </Header>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </MDXProvider>
  );
};

const Header = styled(Box)`
  display: flex;
  flex-flow: column;
  margin-bottom: ${rhythm(1)};
`;

const Logo = styled(Box)`
  max-width: 200px;
`;

const HeaderContent = styled(Box)`
  flex-basis: 85%;
`;

const Download = styled(Anchor)`
  ${({ theme }) => css`
    display: inline-block;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    padding: 0.6em;
    margin-top: ${rhythm(0.5)};
    text-decoration: none;

    &:focus,
    &:active,
    &:hover {
      background: rgba(${hexToRgb(theme.colors.blue)}, 0.9);
    }
  `}
`;

const StyledFilePdf = styled(FilePdf)`
  color: ${({ theme }) => theme.colors.white};
  width: 24px;
  margin-left: 0.2em;
`;

export default CaseStudy; // default export needed for gatsby-node

export const caseStudyQuery = graphql`
  query CaseStudy($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        attachments {
          publicURL
        }
        filename
        logo {
          name
          childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        slug
        title
      }
    }
  }
`;