import CMS from 'netlify-cms-app';

import { typography } from '../styles/globalStyles';
import { BlogPostPreview } from './previews/BlogPostPreview';
import { CaseStudyPreview } from './previews/CaseStudyPreview';

CMS.registerPreviewStyle(typography.toString(), { raw: true });

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('case-studies', CaseStudyPreview);
