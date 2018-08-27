import css from 'styled-jsx/css'
import { transparent } from '../../../hocs/Page/styles/colors';

export default css`
  .background {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .path {
    fill: ${transparent};
    stroke-width: .5;
    stroke-linecap: round;
    stroke-miterlimit: 2;
    stroke: url(#grad);
  }
`