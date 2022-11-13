import type { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '10rem',
  shadow: '0px 0px 10px 2px rgba(34, 40, 49, 0.2)',
  font: {
    heading: '700 1rem Lato, sans-serif',
    body: '400 1rem Lato, sans-serif'
  },
  palette: {
    common: {
      black: '#222831',
      darkGray: '#212121',
      gray: '#676767',
      lightGray: 'rgba(0,0,0,.1)',
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
