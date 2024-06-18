import { DefaultTheme, css } from 'styled-components';

const colors = {
  primary: '#F0C24C',
  secondary: '#FF6B4A',
  grayLight: '#D9D9D9',
  grayDark: '#707070',
  black: '#000000',
  white: '#ffffff',
};

const fonts = {
  Title1: css`
    font-family: 'DOSPilgiMedium';
    font-size: 5rem;
    padding-bottom: 4rem;
  `,
  Head1: css`
    font-family: 'DOSPilgiMedium';
    font-size: 3rem;
  `,
  Body1: css`
    font-family: 'DOSPilgiMedium';
    font-size: 2rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
