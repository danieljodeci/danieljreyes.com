import css from 'styled-jsx/css'
import { primary, tertiary, secondary, white } from '../../../hocs/Page/styles/colors';

export default css`
  section#publications {
    margin-top: 580px;
    height: auto;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  section#publications h2 {
    font-size: 120px;
    line-height: 150px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 75px;
    margin-left: -7px;
    color: ${tertiary.light};
  }

  section#publications strong {
    color: ${secondary.light};
  }

  section#publications p {
    margin: 0;
    font-family: "Futura", monospace;
    font-weight: 300;
    font-size: 18px;
    transition: color .4s ease;
    color: ${secondary.neutral};
  }

  section#publications ul {
    padding-top: 50px;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  section#publications li {
    margin: 0;
    font-size: 24px;
    line-height: 30px;
    font-family: "Product Sans", sans-serif;
    font-weight: 700;
    margin-bottom: 50px;
    color: ${secondary.light};
  }

  section#publications a {
    text-decoration: line-through;
    margin: 0;
    font-size: 14px;
    line-height: 30px;
    font-family: "Product Sans", sans-serif;
    font-weight: 700;
    margin-bottom: 50px;
    color: ${white.neutral};
  }

  section#publications a:hover {
    text-decoration: none;
  } 

  section#publications span {
    margin: 0;
    font-size: 22px;
    font-family: "Inconsolata", monospace;
    font-weight: 400;
  }

  @media(max-width: 768px){
    section#publications {
      margin-top: 50px;
    }
    section#publications h2 {
      font-size: 80px;
      line-height: 90px;
      margin-bottom: 0;
    }
  }
`
