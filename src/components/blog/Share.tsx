import { Facebook, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { MailSend } from '@styled-icons/boxicons-regular';
import React, { FC } from 'react';

import { Anchor, Box, H4 } from '@components/core';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';

interface IProps {
  url: string;
}

const getFacebookShareUrl = (url: string) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

const getLinkedInShareUrl = (url: string) => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
};

const getTwitterShareUrl = (url: string) => {
  const text = 'Check this out:';
  return `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
    text,
  )}&url=${url}&via=glue`;
};

const getEmailShareUrl = (url: string) => {
  const text = 'Check this out:';
  return `mailto:?subject=${encodeURIComponent(text)}&body=${url}`;
};

export const Share: FC<IProps> = ({ url = '' }) => {
  const facebookUrl = getFacebookShareUrl(url);
  const linkedInUrl = getLinkedInShareUrl(url);
  const twitterUrl = getTwitterShareUrl(url);
  const emailUrl = getEmailShareUrl(url);

  return (
    <Wrapper>
      <H4 mb={0}>Enjoy what you read? Pass it along!</H4>
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
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray06};
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 5px;
  padding: 1em;
  margin-bottom: ${rhythm(1)};

  ${minMediaQuery.Medium(css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `)}
`;

const IconWrapper = styled(Box)`
  margin-top: ${rhythm(0.5)};

  ${minMediaQuery.Medium(css`
    margin-top: 0;
  `)}

  a {
    padding-right: 0.6em;

    &:last-child {
      padding-right: 0;
    }
  }

  svg {
    width: 25px;
  }
`;
