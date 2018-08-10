import css from 'styled-jsx/css'

export default css`
  #home {
    height: 100vh;
    position: relative;
    z-index: 1;
    width: 100%;
    display: block;
  }

  .container {
    position: relative;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
    min-height: 950px;
  }
  @media (min-width: 992px){
    .container {
        width: 970px;
    }
  }
  @media (min-width: 768px){
    .container {
        width: 750px;
    }
  }
`