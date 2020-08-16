/**
 * Source: https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4
 */
import { useState, useEffect } from 'react';

type SSRRect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

const emptySSRRect: SSRRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

type ScrollDirection = 'down' | 'up' | undefined;

export const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState<DOMRect | SSRRect>(
    typeof window !== 'undefined' && window?.document
      ? document.body.getBoundingClientRect()
      : emptySSRRect,
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>();

  const listener = () => {
    setBodyOffset(
      typeof window !== 'undefined' && window?.document
        ? document.body.getBoundingClientRect()
        : emptySSRRect,
    );
    setScrollY(bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};
