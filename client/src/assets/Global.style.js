import { createGlobalStyle } from "styled-components";
import { Media } from "./Mixins.style";

export const GlobalStyle = createGlobalStyle`
  html{
    ${Media.xxlg`
      font-size: 56.2%;
    `}

    ${Media.lg`
      font-size: 54.2%;
    `}

    ${Media.md`
      font-size: 71.2%;
    `}

    ${Media.sm`
      font-size: 54.2%;
    `}
  }
  body {
    margin: 0;
    padding: 0;
    overscroll-behavior-y: contain;
  }
`;
