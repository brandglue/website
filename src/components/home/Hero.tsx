import React, { FC, useEffect, useState } from 'react';

import { Box, H1 } from '@components/core';
import { useScroll } from '@hooks/useScroll';
import heroVideo from '@media/videos/hero-homepage.mp4';
import { css, minMediaQuery, scale, styled } from '@styles/index';

export const Hero: FC = () => {
  const { scrollY } = useScroll();
  const [taglineOpacity, setTaglineOpacity] = useState(1);
  const [taglineScale, setTaglineScale] = useState(1);

  useEffect(() => {
    const bodyOffsetHeight =
      typeof window !== 'undefined' && window?.document
        ? document.body.offsetHeight
        : 0;
    setTaglineOpacity((bodyOffsetHeight - scrollY) / bodyOffsetHeight);
    setTaglineScale((bodyOffsetHeight - scrollY) / bodyOffsetHeight);
  }, [scrollY]);

  return (
    <Container>
      <HeroVideo autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </HeroVideo>
      <Header>
        <Box flexGrow={0} variant="flexItem">
          <Tagline opacity={taglineOpacity} scale={taglineScale}>
            We are a social media agency
            <span>Reaching your audience in the places they hang out most</span>
          </Tagline>
        </Box>
      </Header>
    </Container>
  );
};

const Container = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -999;
  font-size: 0;
`;

const HeroVideo = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.8);
`;

const Header = styled(Box)`
  display: flex;
  max-width: ${({ theme }) => theme.spacings.maxContentColWidth};
  margin: auto;
  color: ${({ theme }) => theme.colors.white};

  ${minMediaQuery.Medium(css`
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-flow: column;
    text-align: center;
  `)};
`;

interface ITaglineProps {
  opacity: number;
  scale: number;
}

const Tagline = styled(H1)<ITaglineProps>`
  ${({ opacity, scale: taglineScale, theme }) => css`
    color: ${theme.colors.white};
    opacity: 1;
    opacity: ${opacity};
    transform: scale(${taglineScale});

    span {
      display: inline-block;
      font-size: ${scale(0.25).fontSize};
      text-transform: none;
    }
  `}
`;
