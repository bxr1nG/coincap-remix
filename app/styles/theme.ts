import type { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '10rem',
  font: {
    heading: '700 1rem Lato, sans-serif',
    body: '400 1rem Lato, sans-serif'
  },
  palette: {
    common: {
      black: '#222831',
      gray: '#212121',
      white: '#ffffff',
      green: '#00b894',
      red: '#ff7675'
    },
    primary: {
      main: '#18c683',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#3f51b5',
      contrastText: '#ffffff'
    }
  }
};
