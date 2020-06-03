import { useStaticQuery, graphql } from 'gatsby';

export const useBlogHeroImage = () => {
  const { file } = useStaticQuery<GatsbyTypes.BlogHeroImageQuery>(graphql`
    query BlogHeroImage {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "blog-hero.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return file?.childImageSharp;
};
