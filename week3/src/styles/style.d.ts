import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
    };
    fonts: {
      Head1: SerializedStyles;
    };
  }
}
