import React from 'react';

import { IAppState } from '@models/AppState';

const initialState: IAppState = {
  isLargeDevice: false,
  isMediumDevice: false,
  isSmallDevice: false,
};

export const AppState = React.createContext(initialState);
