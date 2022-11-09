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
    font: IFontFamily;
    palette: {
      common: {
        black: string;
        gray: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
