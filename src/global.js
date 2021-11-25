import { createGlobalStyle } from "styled-components";
import img from './images/background.jpg';

const Global = createGlobalStyle`

    body {
        background-image: url(${img});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        min-height: 100%;
        height: 100vh;
        font-family: 'Secular One', sans-serif;
        overflow-x: hidden;
    }

`

export default Global;