import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    min-height: 100vh;
    font-weight: 400;
    font-size: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    overflow-y: scroll;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mt-40 {
    margin-top: 40px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .mr-10 {
    margin-right: 10px;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .mr-20 {
    margin-right: 20px;
  }

  .modal {
  z-index: 1050;
  position: absolute;
  margin: 0 auto;
  top: 100px;
  left: 0;
  right: 0;
  }
`;

export default GlobalStyle;
