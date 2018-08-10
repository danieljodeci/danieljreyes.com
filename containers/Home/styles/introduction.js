import css from 'styled-jsx/css'
import { white, secondary, tertiary, red } from '../../../hocs/Page/styles/colors';

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
    width: 310px;
    height: 200px;
  }

  svg {
    font: 900 20px 'Futura', sans-serif;
    font-style: italic;
    opacity: 0.9;
  }


  .knockout-text-bg {
    fill: ${white.light};
  }
  
`