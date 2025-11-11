import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.family.primary};
  }

  body, input, button, textarea, select {
    font: 400 1.6rem ${({ theme }) => theme.fonts.family.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.secondary};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.xlarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.large};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    list-style: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
