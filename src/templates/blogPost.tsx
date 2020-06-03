import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';

interface IProps {
  data: GatsbyTypes.BlogPostQuery;
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  const blogHeroImage = useBlogHeroImage();

  if (!data.markdownRemark?.frontmatter || !data.markdownRemark.html) {
    return null;
  }

  const { frontmatter, html } = data.markdownRemark;

  return (
    <>
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <div>
        <div>
          <Image
            alt=""
            fluid={frontmatter.cover_image?.childImageSharp?.fluid}
          />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
