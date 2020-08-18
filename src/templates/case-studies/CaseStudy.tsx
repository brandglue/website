import { MDXProvider } from '@mdx-js/react';
import { FilePdf } from '@styled-icons/boxicons-solid';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { Breadcrumbs } from '@components/common';
import { Anchor, Box, Divider, Image, SwitchLink, H1 } from '@components/core';
import { css, hexToRgb, rhythm, styled } from '@styles/index';

interface IProps {
  data: GatsbyTypes.CaseStudyQuery;
  pageContext: any;
}

export const CaseStudy: React.FC<IProps> = ({
  data: { caseStudy },
  pageContext,
}) => {
  if (!caseStudy?.frontmatter || !caseStudy.body) {
    return null;
  }

  const { body, frontmatter } = caseStudy;

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
      <Divider />
      <Box pb={0} variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
      </Box>
      <Box bg="gray00">
        <HeaderWrapper>
          <Header>
            <Logo variant="flexItem">
              {frontmatter.logo?.childImageSharp?.fluid && (
                <Image
                  alt={frontmatter.logo?.name}
                  fluid={
                    frontmatter.logo?.childImageSharp?.fluid as FluidObject
                  }
                />
              )}
            </Logo>
            <HeaderContent variant="flexItem">
              <H1>{frontmatter.title}</H1>
              {download?.publicURL && (
                <Download
                  download={frontmatter.filename}
                  hasArrow={false}
                  href={download.publicURL}
                >
                  Download the case study
                  <StyledFilePdf />
                </Download>
              )}
            </HeaderContent>
          </Header>
        </HeaderWrapper>
      </Box>
      <Box variant="section">
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </MDXProvider>
  );
};

const HeaderWrapper = styled(Box)`
  max-width: ${({ theme }) => theme.spacings.maxContentColWidth};
  padding: ${rhythm(1)};
  margin: 0 auto;
`;

const Header = styled(Box)`
  display: flex;
  flex-flow: column;
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
    caseStudy: mdx(frontmatter: { slug: { eq: $slug } }) {
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
