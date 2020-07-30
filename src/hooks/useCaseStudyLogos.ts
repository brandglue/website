import { useStaticQuery, graphql } from 'gatsby';

import { CaseStudyLogosQuery } from '@generated/graphql';

export const useCaseStudyLogos = () => {
  const images = useStaticQuery<CaseStudyLogosQuery>(graphql`
    query CaseStudyLogos {
      quicken: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-quicken.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eloqua: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-eloqua.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      intuit: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-intuit.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      moveFree: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-move-free.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jacksonKayak: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-jackson-kayak.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      good: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-good.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pgi: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "case-study-pgi.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return images;
};
