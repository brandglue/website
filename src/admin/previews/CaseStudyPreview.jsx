import React from 'react';

import { StyleInjector } from '../utils/StyleInjector';

export const CaseStudyPreview = ({ widgetFor }) => {
  return <StyleInjector>{widgetFor('body')}</StyleInjector>;
};
