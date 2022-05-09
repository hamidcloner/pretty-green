import styled,{ createGlobalStyle } from 'styled-components';
import iranSansBold from './assets/fonts/IRAN_Sans_Bold.ttf';
import iranSnasLight from './assets/fonts/IRAN_Sans_Light.ttf';
import peydaBlack from './assets/fonts/PEYDA-BLACK.TTF';
import peydaBold from './assets/fonts/PEYDA-BOLD.TTF';
import vazirBold from './assets/fonts/Vazir-Bold-FD.woff';
import vazirRegular from './assets/fonts/Vazir-Regular-FD.woff';
import { sizes } from './breakPoints';


export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    };
    ul,ol {
        margin : 0;
    };
    li { 
        list-style : none;
    };
    a {
        text-decoration : none;
        color : unset;
    };
    a:hover {
        color : unset;
    }
    html {
        font-size : 10px;
        

        @media only screen and (max-width:${sizes.md}){
            font-size : 8px;
        };
    };

    @font-face {
        font-family : iranSnasBold;
        font-weight : normal;
        src : url(${iranSansBold}) format('truetype');
    };
    @font-face {
        font-family : iranSnasLight;
        font-weight : normal;
        src : url(${iranSnasLight}) format('truetype');
    };
    
    @font-face {
        font-family : peydaBlack;
        font-weight : normal;
        src : url(${peydaBlack}) format('truetype');
    };
    @font-face {
        font-family : peydaBold;
        font-weight : normal;
        src : url(${peydaBold}) format('truetype');
    };
    
    @font-face {
        font-family : vazirBold;
        font-weight : normal;
        src : url(${vazirBold}) format('woff');
    };
    @font-face {
        font-family : vazirRegular;
        font-weight : normal;
        src : url(${vazirRegular}) format('woff');
    };

`;

export default GlobalStyle;



