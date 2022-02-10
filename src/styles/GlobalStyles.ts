import { createGlobalStyle } from "styled-components";
import SFProDisplayLight from "../assets/fonts/SFProDisplay_Light.woff2";
import SFProDisplayRegular from "../assets/fonts/SFProDisplay_Regular.woff2";
import SFProDisplayMedium from "../assets/fonts/SFProDisplay_Medium.woff2";
import SFProDisplayBold from "../assets/fonts/SFProDisplay_Bold.woff2";
import SFProDisplayBlack from "../assets/fonts/SFProDisplay_Black.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Display';
        src: url(${SFProDisplayLight}) format("woff2");
        font-weight: 300;
        font-style: lighter;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(${SFProDisplayRegular}) format("woff2");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(${SFProDisplayMedium}) format("woff2");
        font-weight: 500;
        font-style: medium;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(${SFProDisplayBold}) format("woff2");
        font-weight: 700;
        font-style: bold;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(${SFProDisplayBlack}) format("woff2");
        font-weight: 900;
        font-style: bolder;
    }
    :root {
        --primary-blue: #1D3051;
        --secondary-blue: #091E42;
        --primary-grey: #8993A4;
        --list-view: repeat(2,1fr);
        --flex-orientation: column;
        --padding-aux: 10px;
    }
    body {
        background: red;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        font-family: "SF Pro Display", sans-serif;
    }
`;