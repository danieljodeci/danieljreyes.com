import css from 'styled-jsx/css'

export default css`
  .background {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .path {
    fill: rgba(0, 0, 0, 0);
    stroke-width: .5;
    stroke-linecap: round;
    stroke-miterlimit: 2;
    stroke: url(#grad);
  }
`