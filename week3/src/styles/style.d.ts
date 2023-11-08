import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      red: string;
      grayLight: string;
      grayDark: string;
      black: string;
      white: string;
    };
    fonts: {
      Title1: SerializedStyles;
      Head1: SerializedStyles;
    };
  }
}
