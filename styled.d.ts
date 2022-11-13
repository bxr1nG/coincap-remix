import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}
interface IFontFamily {
  heading: string;
  body: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    shadow: string;
    font: IFontFamily;
    palette: {
      common: {
        black: string;
        darkGray: string;
        gray: string;
        lightGray: string;
        white: string;
        green: string;
        red: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
