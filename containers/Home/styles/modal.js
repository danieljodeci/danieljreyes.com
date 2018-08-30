import css from 'styled-jsx/css'
import { primary, white, tertiary } from '../../../hocs/Page/styles/colors';

export default css`
  .wrapper {
    align-items: center;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 250;
    overscroll-behavior: contain;
    overflow: auto; 
  }

  .modal {
    width: 100%;
    display: flex;
    background-color: ${primary.dark};
    min-height: 100vh;
    overscroll-behavior: contain;
    overflow-x: hidden;
    overflow-y: scroll;

    transform: translate(0, 100vh);
    transition: transform 800ms ease-in;
  }

  .modal.horizontal {
    transform: translate(100vw, 0);
    transition: transform 800ms ease-in;
  }

  .modal.active {
    transform: translate(0, 0);
    transition: transform 800ms ease-in;
  }

  .close-container {
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 250;
  }

  .close-container svg {
    color: ${primary.dark};
  }

  .body {
    width: 100%;
  }
  
  .close-container {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .close-container button {
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    -webkit-appearance: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    background: none;
    font-size: 50px;
    color: ${primary.light};
    transition: color 400ms ease-in;
  }

  .close-container button:hover {
    color: ${tertiary.neutral};
    transition: color 400ms ease-in;
  }
`