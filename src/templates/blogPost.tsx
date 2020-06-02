import React from 'react';
import { graphql } from 'gatsby';

interface IProps {
  data: GatsbyTypes.BlogPostQuery;
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  if (!data.markdownRemark?.frontmatter || !data.markdownRemark.html) {
    return null;
  }

  const { frontmatter, html } = data.markdownRemark;

  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
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
      }
    }
  }
`;
