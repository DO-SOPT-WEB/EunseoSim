import { DefaultTheme, css } from 'styled-components';

const colors = {
  yellow: '#F0C24C',
  red: '#FF6B4A',
  grayLight: '#D9D9D9',
  grayDark: '#707070',
  black: '#000000',
};

const fonts = {
  Head1: css`
    font-family: 'DOSPilgiMedium';
    font-size: 2rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
