import css from 'styled-jsx/css'
import { white, secondary, tertiary, red } from '../../../hocs/Page/styles/colors';

export default css`
  #intro {
    position: relative;
    height: 1000px;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px){
    section {
        width: 750px;
    }
  }
  @media (min-width: 992px){
    section {
        width: 970px;
    }
  }
  @media (min-width: 1200px){
    section {
        width: 1170px;
    }
  }

  #intro > h1 {
    font-size: 400px;
    color: rgba(243, 234, 233, 0.8);
    position: absolute;
    z-index: -1;
    margin: 0;
    line-height: 350px;
    font-weight: 600;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }

  .container h1 {
    font-weight: 600;
    font-size: 16em;
    color: ${white.light};
    margin: 0;
  }

  .container h2 {
    font-weight: 600;
    font-size: 10em;
    color: ${white.light};
    margin: 0;
    padding-left: 5px;
    min-width: 340px;
  }

  .container h3 {
    font-weight: 600;
    font-size: 6em;
    color: ${white.light};
    margin: 0;
    padding-left: 10px;
  }

  .container strong {
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
    height: 200px;
  }

  .knockout-text-container {
    font: 900 20px 'Futura', sans-serif;
    font-style: italic;
    opacity: 0.9;
  }


  .knockout-text-bg {
    fill: ${white.light};
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
`