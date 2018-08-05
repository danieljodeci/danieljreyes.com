import {global} from 'styled-jsx/css'

export default global`
  .* {
    box-sizing: border-box
  }

  html, body {
    margin: 0 0;
    font-family: var(--fontAvenirNext)!important;
    min-height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .app {
    min-height: 100vh;
    width: 100%;
    font-weight: normal;
    display: flex;
  }

  a {
    cursor: pointer;
    color: var(--colorSecondary);
  }
`