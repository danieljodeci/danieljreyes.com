import css, {global} from 'styled-jsx/css'
import { primary, tertiary, secondary } from '../../../hocs/Page/styles/colors';

export default css`
  section#about {
    padding-top: 60px;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .bio {
    width: 50%;
    position: relative;
  }

  .bio h2 {
    margin: 0;
    font-size: 120px;
    line-height: 150px;
    font-weight: 700;
    margin-bottom: 75px;
    margin-left: -7px;
    color: ${tertiary.neutral};
  }

  .bio strong {
    color: ${secondary.light};
  }

  .bio p {
    margin: 0;
    font-family: "Futura", monospace;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    transition: color .4s ease;
    color: ${secondary.neutral};
  }

  @media (max-width: 768px) {
    section#about {
      padding-top: 80px;
      padding-bottom: 200px;
    }

    .bio {
      width: 100%;
    }

    .bio h2 {
      font-size: 80px;
      line-height: 90px;
      margin-bottom: 30px;
    }
  }
`
