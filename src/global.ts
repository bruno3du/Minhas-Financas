/** @format */

import { createGlobalStyle } from 'styled-components';

import NexaBookTff from './assets/fonts/nexabook.ttf';
import NexaHeavyTff from './assets/fonts/nexaheavy.ttf';

export default createGlobalStyle`
   
    @font-face {
        font-family: 'NexaBook';
        src: local('NexaBook'),
        url(${NexaBookTff}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'NexaHeavy';
        src: local('NexaHeavy'),
        url(${NexaHeavyTff}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-smooth: antialiased;
        -webkit-font-smoothing: antialiased !important;
      }

`;

// *{
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   @font-face {
//     font-family: "Nexa book";
//     src: url("./assets/fonts/nexa-book.ttf");
//   }
//   @font-face {
//     font-family: "Nexa Heavy";
//     src: url("./assets/fonts/nexa-heavy.ttf");
//   }
// }

// :root{
//   --fontNexaHeavy: "Nexa Heavy", sans-serif;
//   --fontNexaBook: "Nexa book", sans-serif;
//   --color: blue;
// }

// body {
//   font-family: -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
