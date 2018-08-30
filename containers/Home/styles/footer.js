import css from 'styled-jsx/css'
import { primary, tertiary, white } from '../../../hocs/Page/styles/colors';

export default css`
  footer > div > div > div {
    position: relative;
  }

  .text-top {
    margin: 0;
    position: absolute;
    right: 0;
    top: -150px;
    text-transform: uppercase;
    z-index: -1;
  }

  .text-top h3 {
    font-size: 400px;
    line-height: 400px;
    font-weight: 700;
    color: ${primary.dark};
  }

  footer h2 {
    margin: 0;
    font-size: 120px;
    line-height: 150px;
    font-weight: 400;
    margin-bottom: 75px;
    margin-left: -7px;
    color: ${white.neutral};
  }

  footer span {
    color: ${tertiary.neutral};
  }

  footer span a {
    text-decoration: line-through;
  }

  footer span a:hover {
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
    color: ${white.neutral};
    font-size: 40px;
    line-height: 28px;
    margin-right: 36px;
    text-decoration: none;
    display: inline-block;
    transition: all 400ms ease;
  }

  .social-nav a:hover {
    color: ${tertiary.neutral};
    transition: all 400ms ease;
  }

  .bottom-text {
    position: absolute;
    bottom: -5px;
    right: 0;
    color: ${white.neutral};
  }

  @media(max-width: 768px){
    footer {
      margin-top: 70px;
    }
    .text-top h3 {
      font-size: 100px;
      line-height: 100px;
    }

    footer h2 {
      font-size: 50px;
      line-height: 80px;
    }

    .social-nav a {
      font-size: 30px;
      margin-right: 20px;
    }

    .bottom-text {
      bottom: -90px;
    }
  }
`