import React from 'react';

import { IAppState } from '@models/AppState';

const initialState: IAppState = {
  isLargeFormFactor: false,
  isMediumFormFactor: false,
  isSmallFormFactor: false,
};

export const AppState = React.createContext(initialState);
