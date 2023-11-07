import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      green: string;
      blue: string;
      black: string;
      grayDark: string;
      grayLight: string;
    };
    fonts: {
      Head1: SerializedStyles;
    };
  }
}
