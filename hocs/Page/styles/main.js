import {global} from 'styled-jsx/css'
import {primary} from './colors'

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

  .app {
    background-color: ${primary.neutral}
  }

  .align-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .full-width {
    width: 100%;
  }

  .full-height {
    height: 100%;
  }
`