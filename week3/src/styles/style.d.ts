import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      grayLight: string;
      grayDark: string;
      black: string;
      white: string;
    };
    fonts: {
      Title1: SerializedStyles;
      Head1: SerializedStyles;
      Body1: SerializedStyles;
    };
  }
}
