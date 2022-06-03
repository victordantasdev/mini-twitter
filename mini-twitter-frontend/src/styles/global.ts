import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
  }
  ${normalize}
  html, body {
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    transition: all 0.2s ease-in-out;
  }
  /* a {
    color: ${({ theme }) => theme.foreground};
    text-decoration: none;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #52667A;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #CBD2D9;
    border-radius: 10px;
  } */
`;
