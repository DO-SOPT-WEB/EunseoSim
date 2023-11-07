import { DefaultTheme, css } from "styled-components";

const colors = {
  yellow: "#F0C24C",
};

const fonts = {
  Head1: css`
    font-family: "DOSPilgiMedium";
    font-size: 2rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
