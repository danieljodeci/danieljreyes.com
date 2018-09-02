import css, {global} from 'styled-jsx/css'
import { primary, tertiary, secondary, gray, white } from '../../../hocs/Page/styles/colors';

export default css`
  section#works {
    height: auto;
    position: relative;
    z-index: 1;
    width: 100%;
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

  .works-intro {
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

  .right.project:after {
    content: '';
    width: 80px;
    height: 70%;
    background-color: ${gray.light};
    position: absolute;
    top: -50px;
    right: 65px;
  }

  .left.project:after {
    content: '';
    width: 80%;
    height: 80px;
    background-color: ${gray.light};
    position: absolute;
    top: 50px;
    left: -50px;
  }

  .project:hover:after {
    background-color: ${gray.neutral};
    transition: all .4s ease;
  }

  .right.project em {
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

  .left.project em {
    position: absolute;
    top: 77px;
    left: 25px;
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

  .project figcaption {
    font-size: 60px;
    line-height: 80px;
    font-weight: 400;
    letter-spacing: 3px;
    font-style: italic;
    margin-top: -90px;
    position: relative;
    z-index: 4;
    color: ${white.neutral};
    text-align: center;
  }

  .project strong {
    color: #43B13E;
  }

  .project-container {
    position: relative;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .project-body {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .project-description {
    padding: 10px 40px;
    width: 90%;
  }

  .project-description h3 {
    font-size: 30px;
    color: ${white.neutral};
  }

  .project-description strong {
    color: #79e46d;
  }

  .project-description p {
    color: ${white.neutral};
  }

  .project-description ul {
    list-style: none;
  }

  .project-description li {
    display: flex;
    flex-direction: row;
  }

  .project-description li p {
    margin: 5px 0;
  }

  .project-description li:before {
    content: "•";
    color: #79e46d;
    align-self: center;
    margin-right: 20px;
  }

  .project-media {
    width: 100%;
    height: auto;
    min-width: 300px;
    position: relative;
  }

  .project-media video {
    width: 100%;
    height: 100%;
  }

  .project-media img {
    width: 100%;
    height: auto;
  }

  .project-media button {
    position: absolute;
    bottom: 13px;
    right: 13px;
    border: none;
    -webkit-appearance: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    background: none;
    color: ${white.neutral};
    font-size: 30px;
  }

  @media (min-width: 768px){
    .project-container {
        width: 750px;
    }
  }

  @media (min-width: 992px){
    .project-container {
        width: 970px;
    }
  }

  @media (min-width: 1200px){
    .project-container {
        width: 1070px;
    }
  }

  @media (max-width: 768px) {
    #works {
      margin-top: 50px;
    }

    .title {
      width: 100%;
      margin-top: 50px;
    }

    .title h3 {
      font-size: 65px;
      line-height: 90px;
      margin-bottom: 30px;
    }

    .project-container {
      padding: 80px 20px;
      height: auto;
    }

    .right.project em {
      top: 31px;
      opacity: 1;
    }

    .left.project em {
      left: -25px;
      opacity: 1;
    }

  }


`
