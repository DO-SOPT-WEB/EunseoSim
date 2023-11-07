import { DefaultTheme, css } from 'styled-components';

const colors = {
  yellow: '#F0C24C',
  green: '#5AC540',
  blue: '#53A3ED',
  black: '#000000',
  grayDark: '#707070',
  grayLight: '#D3D3D3',
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
