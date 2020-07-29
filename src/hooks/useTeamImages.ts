import { useStaticQuery, graphql } from 'gatsby';

import { TeamImagesQuery } from '@generated/graphql';

export const useTeamImages = () => {
  const images = useStaticQuery<TeamImagesQuery>(graphql`
    query TeamImages {
      joey: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-joey-ponce.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hannah: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-hannah-lushin.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michelle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-michelle-heathers.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sharon: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-sharon-bell.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zach: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-zach-welch.jpg" }
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
