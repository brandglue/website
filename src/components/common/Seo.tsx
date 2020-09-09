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
  meta?: string[];
  slug?: string;
  title?: string;
}

export const Seo: FC<IProps> = ({
  description = '',
  image: metaImage,
  lang = 'en',
  meta = [],
  slug,
  title = 'Reaching Your Audience',
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoMetadataQuery>(
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
      }
    `,
  );

  const metaDescription = description || site?.siteMetadata?.description;
  const imageSrc =
    metaImage?.src && `${site?.siteMetadata?.siteUrl}${metaImage.src}`;
  const canonical = slug ? `${site?.siteMetadata?.siteUrl}/${slug}` : null;

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
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site?.siteMetadata?.keywords?.join(','),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: imageSrc,
                },
                {
                  property: 'og:image:width',
                  content: metaImage.width.toString(),
                },
                {
                  property: 'og:image:height',
                  content: metaImage.height.toString(),
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ],
        )
        .concat(meta as any)}
      title={title}
      titleTemplate={`${site?.siteMetadata?.title} | %s`}
    />
  );
};
