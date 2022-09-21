import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
      }
      #root{
        height: 100%;
      }
      html{
        --color-text: black;
        --color-background: #E6E6E6;
        --test: purple;
        --border: #00000030;
      }
    @font-face {
        font-family: 'Bergman';
        src: local('/fonts/Bergman.woff2'), local('/fonts/Bergman.woff2'),
        url("/fonts/Bergman.woff2") format('woff2');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Tiempos';
        src: local('/fonts/TiemposFine.woff2'), local('/fonts/TiemposFine.woff2'),
        url("/fonts/TiemposFine.woff2") format('woff2');
        font-weight: 900;
        font-style: normal;
    }
    body{
      margin: 0;
      height: 100%;
      width: 100%;
      padding: 0;
      scroll-behavior: smooth;
      font-family: "Bergman", sans-serif;
      background-color: var(--color-background);
    }
  ::-webkit-scrollbar {
    display: none;
  }
  button{
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
