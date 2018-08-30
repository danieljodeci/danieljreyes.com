import css from 'styled-jsx/css'

export default css`
  .path {
    fill: rgba(25, 200, 35, 0);
    stroke: url(#MyGradient);
    stroke-width: 1;
    stroke-linecap: round;
    stroke-miterlimit: 2;
  }

  @media (max-width: 768px){
    svg {
      width: 300px;
      height: 250px;
    }
  }
`