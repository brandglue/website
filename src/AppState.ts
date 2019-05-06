import React from 'react';

import { IAppState } from '@models/AppState';

const initialState: IAppState = {
  isDesktop: false,
  isMobile: false,
};

export const AppState = React.createContext(initialState);
