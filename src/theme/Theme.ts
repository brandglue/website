const colorMap = {
  blue: 'blue',
  darkBlue: '#2525b1',
  gold: 'gold',
  black: '#000',
  white: '#fff',
  mediumGray: '#888',
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    blue: string;
    darkBlue: string;
    gold: string;
    black: string;
    white: string;
    mediumGray: string;
  }
  fontFamily: string;
  fontSize: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    medium: number;
  }
  padding: {
    page: number;
    small: number;
    medium: number;
    large: number;
  }
  margin: {
    small: number;
    medium: number;
    large: number;
  }
}

export default {
  colors: {
    primary: colorMap.blue,
    secondary: colorMap.gold,
    blue: colorMap.blue,
    darkBlue: colorMap.darkBlue,
    gold: colorMap.gold,
    black: colorMap.black,
    white: colorMap.white,
    mediumGray: colorMap.mediumGray,
  },
  fontFamily: 'Lato, Arial, "sans-serif"',
  fontSize: {
    h1: 32,
    h2: 24,
    h3: 18,
    h4: 14,
    medium: 14,
  },
  padding: {
    page: 40,
    small: 4,
    medium: 8,
    large: 16,
  },
  margin: {
    small: 4,
    medium: 8,
    large: 16,
  }
};
