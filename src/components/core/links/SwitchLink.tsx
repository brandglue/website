import React, { FC } from 'react';

import { Anchor, NavLink } from '@components/core';

const domainRegex = /http[s]*:\/\/[www.]*brandglue\.com[/]?/;

/*
 * Check for markdown links using absolute hrefs
 * If link matches target regex, then swap in a NavLink component for local navigation
 * Otherwise use a standard <a> tag
 */
export const SwitchLink: FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href = '',
  ...rest
}) => {
  const sameDomain = domainRegex.test(href);

  if (sameDomain) {
    href = href.replace(domainRegex, '/');
  }

  if (href.startsWith('/')) {
    return <NavLink data-link-internal to={href} {...rest} />;
  }

  // Treat urls that aren't web protocols as "normal" links
  if (!href.startsWith('http')) {
    return <Anchor href={href} {...rest} />;
  }

  return (
    <Anchor
      href={href}
      rel="noopener noreferrer nofollow"
      target="_blank"
      {...rest}
    />
  );
};
