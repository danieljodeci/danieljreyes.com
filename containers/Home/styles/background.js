import css from 'styled-jsx/css'

export default css`
  .background {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
    top: -40px;
  }
  .path {
    fill: rgba(0, 0, 0, 0);
    stroke-width: 1;
    stroke-linecap: round;
    stroke-miterlimit: 2;
    stroke: url(#grad);
  }
`