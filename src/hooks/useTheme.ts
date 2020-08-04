import { useContext } from 'react';

import { ThemeContext } from '@styles/index';

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
