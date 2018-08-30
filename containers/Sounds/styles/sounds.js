import css, {global} from 'styled-jsx/css'
import { primary, tertiary, secondary, white } from '../../../hocs/Page/styles/colors';

export default css`
  section#sounds {
    height: auto;
    position: relative;
    z-index: 1;
    width: 100%;
    padding-top: 250px;
  }

  .title {
    margin-bottom: 0px;
    position: relative;
    z-index: 1;
    width: 50%;
  }

  .title h3 {
    font-size: 120px;
    line-height: 150px;
    font-weight: 700;
    margin-bottom: 0px;
    margin-left: -7px;
    color: ${tertiary.neutral};
  }

  .title strong {
    color: ${secondary.light};
  }

  .blendo {
    max-width: 100%;
    height: auto;
    display: block;
    box-shadow: 0 0 38px rgba(0, 0, 0, 0.3), 0 0 12px rgba(0, 0, 0, 0.22);
    opacity: 0.5;
    position: relative;
    z-index: 4;
    transition: all .4s ease;
  }

  .sounds-intro {
    font-family: "Futura", monospace;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    transition: color .4s ease;
    color: ${secondary.neutral};
  }

  .project {
    position: relative;
    z-index: 10;
    margin: 0;
    cursor: pointer;
  }

  .project em {
    transform: rotate(90deg);
    left: inherit;
    right: 15px;
    position: absolute;
    top: 62px;
    right: 43px;
    font-family: "Futura", monospace;
    font-size: 18px;
    line-height: 28px;
    color: ${white.neutral};
    z-index: 5;
    display: inline-block;
    opacity: 0;
    transition: all .4s ease;
  }

  .project:hover em {
    opacity: 1;
    transition: all .4s ease;
  }

  .project:hover img {
    opacity: 0.2
  }
  
  .project img {
    max-width: 100%;
    height: auto;
    display: block;
    opacity: 0.6;
    position: relative;
    z-index: 4;
    transition: all .4s ease;
  }

  @media (max-width: 768px) {
    section#sounds {
      padding-top: 0;
    }

    .title {
      width: 100%;
    }

    .title h3 {
      font-size: 80px;
      line-height: 90px;
      margin-bottom: 40px;
    }
  }
`
