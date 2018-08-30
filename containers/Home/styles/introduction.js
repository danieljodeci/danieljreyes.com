import css from 'styled-jsx/css'
import { white, secondary, primary, tertiary, red } from '../../../hocs/Page/styles/colors';

export default css`
  #intro {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
    min-height: 1050px;
  }

  @media screen and (min-width: 1351px) and (max-width: 1450px) {
    section#intro {
      min-height: 900px;
    }
  }
  
  @media screen and (min-width: 1366px) and (max-width: 1366px) {
    section#intro {
      min-height: 500px;
    }
  }
  
  @media screen and (min-width: 1025px) and (max-width: 1350px) {
    section#intro {
      min-height: 1050px;
    }
  }
  
  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px), only screen and (min--moz-device-pixel-ratio: 2) and (min-width: 1024px), only screen and (min-device-pixel-ratio: 2) and (min-width: 1024px), only screen and (min-resolution: 192dpi) and (min-width: 1024px), only screen and (min-resolution: 2dppx) and (min-width: 1024px) {
    section#intro {
      height: auto;
    }
  }
  
  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1199px), only screen and (min--moz-device-pixel-ratio: 2) and (min-width: 1199px), only screen and (min-device-pixel-ratio: 2) and (min-width: 1199px), only screen and (min-resolution: 192dpi) and (min-width: 1199px), only screen and (min-resolution: 2dppx) and (min-width: 1199px) {
    section#intro {
      min-height: 130vh;
      margin-top: -80px;
    }
  }

  .background-text {
    position: relative;
    left: 0px;
    top: 100px;
    text-transform: uppercase;
    z-index: -1;
  }

  .background-text h4 {
    font-size: 450px;
    line-height: 400px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 75px;
    margin-left: -7px;
    color: ${primary.dark};
  }

  .welcome-animation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    min-width: 540px;
  }

  .section-container h1:not(.background-text) {
    font-weight: 600;
    font-size: 16em;
    color: ${white.light};
    margin: 0;
  }

  .section-container h2 {
    font-weight: 600;
    font-size: 10em;
    color: ${white.light};
    margin: 0;
    padding-left: 5px;
    min-width: 340px;
  }

  .section-container h3 {
    font-weight: 600;
    font-size: 6em;
    color: ${white.light};
    margin: 0;
    padding-left: 10px;
  }

  .section-container strong {
    font-weight: 600;
    color: ${secondary.light};
  }

  .description {
    position: absolute;
    transform: rotate(-90deg);
    top: 50%;
    transform: translateY(-50%);
    left: -46px;
    width: 310px;
    height: 170px;
  }

  .knockout-text-container {
    font: 900 20px 'Futura', sans-serif;
    font-style: italic;
    opacity: 0.9;
  }


  .knockout-text-bg {
    fill: ${secondary.light};
  }
  
  .wiggle-container {
    position: absolute;
    z-index: -1;
  }

  

  .wiggle-path {
    fill: #000;
    stroke-dasharray: 10;
  }

  @keyframes hide {
    to {
      fill: #fff;
    }
  }

  .clockwise {
    -webkit-animation: clockwise 7s linear infinite;
    -moz-animation: clockwise 7s linear infinite;
    -ms-animation: clockwise 7s linear infinite;
    -o-animation: clockwise 7s linear infinite;
    animation: clockwise 7s linear infinite;
  }

  .counter {
    -webkit-animation: counter 10s linear infinite;
    -moz-animation: counter 10s linear infinite;
    -ms-animation: counter 10s linear infinite;
    -o-animation: counter 10s linear infinite;
    animation: counter 10s linear infinite;
  }

  @-webkit-keyframes clockwise /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes clockwise {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes counter /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    to {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes counter {
    from {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    to {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @media (max-width: 767px){
    .background-text {
      min-height: 560px;
    }

    .background-text h4 {
      display: none;
    }

    #intro {
      height: auto;
      width: auto;
      min-height: auto;
    }

    .section-container h1:not(.background-text) {
      font-size: 156px;
    }
  
    .section-container h2 {
      font-size: 76px;
    }
  
    .section-container h3 {
      font-size: 66px;
    }

    .welcome-animation {
      min-width: 345px;
      left: -4px;
    }

    .description {
      right: -84px;
      top: 90px;
      left: inherit;
      width: 250px;
      height: 130px;
    }

    .knockout-text-container {
      font: 900 16px 'Futura', sans-serif;
      font-style: italic;
      opacity: 0.9;
    }
`