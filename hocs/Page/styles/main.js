import {global} from 'styled-jsx/css'
import {primary, secondary} from './colors'

export default global`
  .* {
    box-sizing: border-box
  }

  html, body {
    margin: 0 0;
    font-family: 'Avenir Next', Nunito;
    min-height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .app {
    height: 100%;
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
    background-color: ${primary.neutral}A1;
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

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .text strong {
    font-weight: 600;
    color: ${secondary.light};
  }
`