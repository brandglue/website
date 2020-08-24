import React from 'react';

import { StyleInjector } from '../utils/StyleInjector';

export const BlogPostPreview = ({ widgetFor }) => {
  return <StyleInjector>{widgetFor('body')}</StyleInjector>;
};
