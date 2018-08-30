import css from 'styled-jsx/css'
import { white } from '../../../hocs/Page/styles/colors';

export default css`
  #page-content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    margin-bottom: 130px;
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

  .dropdown {
    position: absolute;
    top: 15px;
    left: 15px;
    -webkit-appearance: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    background: none;
    color: ${white.neutral};
    border: none;
    font-size: 30px;
    z-index: 250;
  }
  
  @media (min-width: 768px){
    .container {
        width: 750px;
    }
  }
  @media (min-width: 992px){
    .container {
        width: 970px;
    }
  }
  @media (min-width: 1200px){
    .container {
        width: 1170px;
    }
  }

`