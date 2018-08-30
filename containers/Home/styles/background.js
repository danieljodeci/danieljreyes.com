import css from 'styled-jsx/css'
import { transparent } from '../../../hocs/Page/styles/colors';

export default css`
  .background {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
    max-width: 100vw;
  }
  .path {
    fill: ${transparent};
    stroke-width: .1;
    stroke-linecap: round;
    stroke-miterlimit: 2;
    stroke: url(#grad);
  }

  @media (max-width: 768px){
    .path {
      stroke-width: .5;
    }
  }
`