import css from 'styled-jsx/css'
import { primary, tertiary } from '../../../hocs/Page/styles/colors';

export default css`
  footer > div > div > div {
    position: relative;
  }

  .text-top {
    margin: 0;
    position: absolute;
    right: 0;
    top: -150px;
    color: #1F1F1F;
    text-transform: uppercase;
    z-index: -1;
  }

  .text-top h3 {
    font-size: 400px;
    line-height: 400px;
    font-weight: 700;
    color: ${primary.neutral};
  }

  footer h2 {
    margin: 0;
    font-size: 120px;
    line-height: 150px;
    font-weight: 700;
    margin-bottom: 75px;
    margin-left: -7px;
    color: ${primary.light};
  }

  footer span {
    color: ${tertiary.neutral};
    text-decoration: line-through;
  }

  footer span:hover {
    text-decoration: none;
  }

  .social-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .social-nav li {
    display: inline-block;
  }

  .social-nav a {
    text-decoration: none;
    color: white;
    font-size: 40px;
    line-height: 28px;
    margin-right: 36px;
    text-decoration: none;
    display: inline-block;
  }
`