import css from 'styled-jsx/css'
import { primary, secondary, black, white, gray, red, tertiary } from '../../../hocs/Page/styles/colors';

export default css`

  .container {
    position: fixed;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;

    transform: translate(-50%, -200px);
    transition: transform 800ms ease-in;
  }

  .container.active {
    transform: translate(-50%, 30px);
    transition: transform 800ms ease-in;
  }

  .sequencer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }


  .button {
    position: relative;
    display: flex;
    flex-direction column;
    align-items: center;
    margin: 0 5px;
    box-shadow: 0px 0px 15px ${primary.dark};
    border: none;
    -webkit-appearance: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    background: none;
  }

  .button section {
    width: 40px;
    height: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${primary.neutral};
    transition: 500ms;
    position: relative;
  }

  .button.big section {
    width: 60px;
    background-color: ${gray.light};
  }

  .button label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: ${secondary.dark};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .button section div:not(.led) {
    width: 80%;
    height: 50%;
    background-color: ${primary.dark};
    position: absolute;
    bottom: 8%;
    box-shadow: 0px 0px 15px ${primary.dark};
    transition: 500ms
  }

  .button.secondary section {
    background-color: ${secondary.neutral};
  }

  .button.secondary section div:not(.led) {
    background-color: ${secondary.darker};
    box-shadow: 0px 0px 15px ${secondary.dark};
  }

  .button.tertiary section {
    background-color: ${white.neutral};
  }

  .button.tertiary section div:not(.led) {
    background-color: ${gray.neutral};
    box-shadow: none;
  }

  .button.big section div:not(.led) {
    background-color: ${gray.neutral};
    box-shadow: none;
  }

  .button.alert section {
    background-color: ${red.neutral};
  }

  .button.alert section div:not(.led) {
    background-color: ${red.darker};
    box-shadow: 0px 0px 15px ${red.dark};
  }

  .led {
    background-color: ${secondary.light};
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 15%;
  }

  .led.active {
    background-color: orange;
  }

  .led.enabled {
    background-color: ${red.dark};
  }

  .led.enabled.active {
    background-color: ${red.light};
  }

  .control-panel {
    margin: 20px 0px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .knob {
    position: relative;
    cursor: pointer;
  }

  .knob > div:not(.ticks) {
    border-radius: 50%;
    background-color: ${black.dark};
    margin: 20px;
    box-shadow: 0px 0px 15px ${black.light};
    position: relative;
  }

  .knob div:not(.ticks) > div {
    position: absolute;
    background-color: ${black.neutral};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 8px;
    box-shadow: 0px 0px 5px ${black.dark};
  }

  .knob div:not(.ticks) > div span {
    position: absolute;
    width: 3px;
    background-color: ${white.light};
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }

  .ticks {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .ticks span {
    position: absolute;
    background: ${gray.dark};
    color: ${white.light};
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 600;
  }

  .knob div:not(.ticks) > div.flat {
    background: ${black.dark};
    box-shadow: none;
  }
  
  .knob label {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: ${secondary.dark};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }


  .button-row-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    position: relative;
    flex-shrink: 0;
    margin-bottom: 10px;
    padding: 0;
    justify-content: center;
  }

  @media (max-width: 768px){

    .sequencer {
      flex-wrap: wrap;
    }
    
    .container {
      background-color: ${black.neutral}e0;
      height: 100vh;
      transform: translate(0, -100vh);
      left: 0;
      width: 100vw;
    }

    .container.active {
      transform: translate(0, 0px);
    }

    .button {
      margin-right: 10px;
      display: block;
      position: relative;
    }
  }
`