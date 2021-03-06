import {global} from 'styled-jsx/css'
import {primary, secondary, tertiary, white} from './colors'

export default global`
  .* {
    box-sizing: border-box
  }

  html, body {
    margin: 0 0;
    font-family: 'Avenir Next', Nunito;
    min-height: 100%;
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
    color: ${tertiary.neutral};
    text-decoration: line-through;
  }

  .app {
    background-color: ${primary.dark};
  }

  .align-center {
    display: flex;
    align-items: center;
  }

  .justify-center {
    display: flex;
    justify-content: center;
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

  .section-row {
    display: table;
    position: relative;
    margin-left: 0;
    margin-right: 0;
  }

  .skills {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    right: 0px;
    background-color: ${primary.darker}57;
    padding: 36px;
    min-width: 35%;
    box-shadow: 0 0 38px ${primary.dark}, 0 0 12px ${primary.dark};
    z-index: 1;
  }

  .skills h4 {
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 25px;
    font-weight: 600;
    color: ${tertiary.neutral};
  }

  .skills ul {
    list-style: none;
    padding: 0;
    z-index: 2;
    max-width: 400px;
  }

  .skills > ul > li {
    font-family: "Futura", monospace;
    font-weight: 200;
    font-size: 18px;
    line-height: 38px;
    position: relative;
    margin: 0;
    margin-bottom: 15px;
    color: ${white.neutral};
  }

  .skills > ul > li > div > span {
    cursor: pointer;
  }

  .skills > ul > li div svg {
    cursor: pointer;
  }

  .skills span {
    display: inline-block;
    position: relative;
    z-index: 2;
  }

  .skills > ul > li span:after {
    content: '';
    width: 101%;
    height: 7px;
    position: absolute;
    bottom: 9px;
    left: 0;
    background-color: ${tertiary.dark};
    z-index: -1;
  }

  .skills li div svg {
    font-size: 20px;
    margin-right: 5px;
  }

  .skills li > ul li {
    font-family: "Futura", monospace;
    font-weight: 200;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    margin: 0;
    margin-bottom: 5px;
    color: ${white.neutral};
    margin-left: 30px;
  }

  .skills li > ul li span:after {
    content: '';
    width: 101%;
    height: 7px;
    position: absolute;
    bottom: 9px;
    left: 0;
    background-color: ${primary.dark};
    z-index: -1;
  }

  .project-section {
    width: 33.33%;
    margin-left: 16.66666667%;
    padding-left: 0;
    padding-right: 0;
    float: left;
  }

  .intro-container {
    margin-top: 65px;
  }

  .skills > ul > li > ul {
    display: flex;
    flex-wrap: wrap;
  }

  .display-block {
    display: block;
  }

  .float-left {
    float: left;
  }

  em svg {
    vertical-align: middle;
  }

  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }

  // @media (min-width: 767px){
  //   .section-container {
  //       width: 750px;
  //   }
  // }

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

  @media (max-width: 1024px) {
    .section-row {
      display: block;
    }

    .intro-container {
      margin-top: 200px;
    }
  }

  @media (max-width: 768px) {
    .skills {
      position: relative;
      background: none;
      box-shadow: none;
      padding-left: 0;
    }

    .half-width {
      width: 100%;
    }

    .project-section {
      width: 100%;
      margin: 0;
      padding: 50px 0;
      float: none;
    }
    
    .intro-container {
      margin-top: 65px;
    }

  }
`