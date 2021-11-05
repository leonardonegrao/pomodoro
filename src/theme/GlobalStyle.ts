import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    ${normalize}

    body {
      margin: 0;
      padding: 0;
    }
    
    html, body {
      display: flex;
      min-height: 100vh;
      width: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-block: 0;
      margin-inline: 0;
      margin: 0;
    }

    #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 100%;
    }

    input {
      font-family: ${({ theme }) => theme.typography.fonts[theme.activeTheme.fontFamily].fontFamily};
      font-weight: 700;
      font-size: 14px;
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
`;
