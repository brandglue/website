import React, { useState, useEffect } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

// Enable netlify-cms to use styled-component styles in preview
export const StyleInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);

    // set body margin
    iframe.contentDocument.body.style.margin = '2em';
  }, []);

  return (
    iframeRef && (
      <ThemeProvider theme={theme}>
        <StyleSheetManager target={iframeRef}>
          <>
            <GlobalStyles />
            {children}
          </>
        </StyleSheetManager>
      </ThemeProvider>
    )
  );
};
