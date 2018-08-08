import css from 'styled-jsx/css'
import { primary, white } from '../../../hocs/Page/styles/colors';

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
    height: 100vh;
    overscroll-behavior: contain;
    overflow: hidden;
    overflow-y: visible;

    transform: translateY(100vh);
    transition: transform 800ms ease-in;
  }

  .modal.active {
    transform: translateY(0);
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
`