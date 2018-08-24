import {global} from 'styled-jsx/css'
import {primary, secondary, tertiary} from './colors'

export default global`
  .* {
    box-sizing: border-box
  }

  html, body {
    margin: 0 0;
    font-family: 'Avenir Next', Nunito;
    min-height: 100%;
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

  .half-width {
    width: 50%;
  }

  .float-left {
    float: left;
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

  .section-container {
    position: relative;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
  }


  @media (min-width: 768px){
    .section-container {
        width: 750px;
    }
  }

  @media (min-width: 992px){
    .section-container {
        width: 970px;
    }
  }

  @media (min-width: 1200px){
    .section-container {
        width: 1070px;
    }
  }

  .section-row {
    display: table;
    position: relative;
    margin-left: 0;
    margin-right: 0;
  }

  .skills {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    background-color: #ead8d57d;
    padding: 36px;
    min-width: 35%;
    box-shadow: 0 0 38px ${primary.neutral}, 0 0 12px ${primary.neutral};
    z-index: 1;
  }

  .skills h4 {
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 25px;
    font-weight: 600;
    color: ${primary.light};
  }

  .skills ul {
    list-style: none;
    padding: 0;
  }

  .skills li {
    font-family: "Futura", monospace;
    font-weight: 200;
    font-size: 18px;
    line-height: 38px;
    position: relative;
    margin: 0;
    margin-bottom: 15px;
    color: ${tertiary.dark};
  }

  .skills span {
    display: inline-block;
    position: relative;
    z-index: 2;
  }

  .skills li span:after {
    content: '';
    width: 101%;
    height: 7px;
    position: absolute;
    bottom: 9px;
    left: 0;
    background-color: ${primary.light};
    z-index: -1;
  }

  .right-section {
    width: 33.33%;
    margin-left: 16.66666667%;
    padding-left: 0;
    padding-right: 0;
    float: left;
  }

  .left-section {
    width: 33.33%;
    margin-left: 16.66666667%;
    padding-left: 0;
    padding-right: 0;
    float: left;
  }
`