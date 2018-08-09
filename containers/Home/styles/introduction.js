import css from 'styled-jsx/css'
import { white, secondary, primary } from '../../../hocs/Page/styles/colors';

export default css`
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
  }

  .description p {
    font-family: "Inconsolata", monospace;
    line-height: 28px;
    transform: rotate(-90deg);
    font-weight: 300;
    font-size: 18px;
    transition: color .4s ease;
    color: ${primary.dark};
  }
`