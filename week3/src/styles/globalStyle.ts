import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
    font-family: 'DOSPilgiMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    }  

    #root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
    }
    html {
        font-size: 62.5%;
    }
    * {
        box-sizing: border-box;
    }
    
`;

export default GlobalStyle;
