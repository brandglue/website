import React, { FC } from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { camelCase, startCase } from 'lodash-es';

interface IProps {
  breadcrumb: IBreadcrumbs;
}

export const Breadcrumbs: FC<IProps> = ({ breadcrumb }) => {
  const { crumbs } = breadcrumb;

  const properCasedCrumbs = crumbs.map((crumb) => {
    const properCased = startCase(camelCase(crumb.crumbLabel));
    crumb.crumbLabel = properCased;
    return crumb;
  });

  return <Breadcrumb crumbs={properCasedCrumbs} />;
};
