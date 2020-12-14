import { useStaticQuery, graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  description?: string;
  image?: {
    height: string | number;
    src: string;
    width: string | number;
  };
  lang?: string;
  path?: string;
  title?: string;
  type?: string;
}

export const Seo: FC<IProps> = ({
  description = '',
  image: metaImage,
  lang = 'en',
  path = '',
  title = 'Reaching Your Audience',
  type = 'website',
}) => {
  const { defaultImage, site } = useStaticQuery<GatsbyTypes.SeoMetadataQuery>(
    graphql`
      query SeoMetadata {
        site {
          siteMetadata {
            author
            description
            keywords
            siteUrl
            title
          }
        }
        defaultImage: file(
          sourceInstanceName: { eq: "media" }
          relativePath: { eq: "images/homepage-hero-poster.jpg" }
        ) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site?.siteMetadata?.description;
  const canonical = path
    ? `${site?.siteMetadata?.siteUrl}${path}`
    : `${site?.siteMetadata?.siteUrl}`;

  const imageObj = metaImage || defaultImage?.childImageSharp?.resize;
  const imageSrc =
    imageObj?.src && `${site?.siteMetadata?.siteUrl}${imageObj.src}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site?.siteMetadata?.keywords?.join(','),
        },
        {
          property: 'og:url',
          content: canonical,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          name: 'twitter:creator',
          content: site?.siteMetadata?.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(
        imageObj
          ? [
              {
                property: 'og:image',
                content: imageSrc,
              },
              {
                property: 'og:image:secure_url',
                content: imageSrc,
              },
              {
                property: 'og:image:width',
                content: imageObj.width?.toString(),
              },
              {
                property: 'og:image:height',
                content: imageObj.height?.toString(),
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
          : [],
      )}
      title={title}
      titleTemplate={`${site?.siteMetadata?.title} | %s`}
    />
  );
};
