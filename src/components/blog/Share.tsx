import { Facebook, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { MailSend } from '@styled-icons/boxicons-regular';
import { useStaticQuery, graphql } from 'gatsby';
import React, { FC } from 'react';

import { Anchor, Box, H4 } from '@components/core';
import { rhythm, styled } from '@styles/index';

interface IProps {
  summary: string;
  title: string;
  url: string;
}

const getFacebookShareUrl = (url: string) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;
};

const getLinkedInShareUrl = (
  url: string,
  title: string,
  source: string,
  summary: string,
) => {
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    url,
  )}&title=${encodeURIComponent(title)}&source=${encodeURIComponent(
    source,
  )}&summary=${encodeURIComponent(summary)}`;
};

const getTwitterShareUrl = (url: string) => {
  const text = 'Check this out:';
  return `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
    text,
  )}&url=${encodeURIComponent(url)}'&via=glue`;
};

const getEmailShareUrl = (url: string) => {
  const text = 'Check this out:';
  return `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(
    url,
  )}`;
};

export const Share: FC<IProps> = ({ summary, title, url }) => {
  const { site } = useStaticQuery<GatsbyTypes.ShareDataQuery>(graphql`
    query ShareData {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const siteUrl = site?.siteMetadata?.siteUrl || '';
  const shareUrl = `${siteUrl}${url}`;

  const facebookUrl = getFacebookShareUrl(shareUrl);
  const linkedInUrl = getLinkedInShareUrl(shareUrl, title, siteUrl, summary);
  const twitterUrl = getTwitterShareUrl(shareUrl);
  const emailUrl = getEmailShareUrl(shareUrl);

  return (
    <Wrapper>
      <H4 mb={0}>Enjoy what you read? Let someone know!</H4>
      <IconWrapper>
        <Anchor
          hasArrow={false}
          href={facebookUrl}
          rel="noopener noreferrer nofollow"
          target="_blank"
          variant="invisible"
        >
          <Facebook />
        </Anchor>
        <Anchor
          hasArrow={false}
          href={twitterUrl}
          rel="noopener noreferrer nofollow"
          target="_blank"
          variant="invisible"
        >
          <Twitter />
        </Anchor>
        <Anchor
          hasArrow={false}
          href={linkedInUrl}
          rel="noopener noreferrer nofollow"
          target="_blank"
          variant="invisible"
        >
          <Linkedin />
        </Anchor>
        <Anchor
          css={{ verticalAlign: 'middle' }}
          hasArrow={false}
          href={emailUrl}
          rel="noopener noreferrer nofollow"
          target="_blank"
          variant="invisible"
        >
          <MailSend />
        </Anchor>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray06};
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 5px;
  padding: 1em;
  margin-bottom: ${rhythm(1)};
`;

const IconWrapper = styled(Box)`
  a {
    padding-left: 0.6em;
  }

  svg {
    width: 25px;
  }
`;
