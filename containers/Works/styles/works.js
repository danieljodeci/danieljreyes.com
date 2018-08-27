import css, {global} from 'styled-jsx/css'
import { primary, tertiary, secondary } from '../../../hocs/Page/styles/colors';

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
    color: ${tertiary.dark};
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
    background-color: rgba(217, 217, 217, 0.4);
    position: absolute;
    top: -50px;
    right: 65px;
  }

  .left.project:after {
    content: '';
    width: 80%;
    height: 80px;
    background-color: rgba(217, 217, 217, 0.4);
    position: absolute;
    top: 50px;
    left: -50px;
  }

  .project:hover:after {
    background-color: rgba(217, 217, 217, 0.9);
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
    color: white;
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
    color: white;
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
    font-weight: 700;
    letter-spacing: 2px;
    margin-top: -90px;
    position: relative;
    z-index: 4;
    color: #4a4a4a;
    text-align: center;
  }

  .project strong {
    color: #43B13E;
  }

  .project-body {
    position: relative;
  }

  .project-description {
    padding: 10px 40px;
  }

  .project-description h3 {
    font-size: 30px;
    color: white;
  }

  .project-description strong {
    color: #79e46d;
  }

  .project-description p {
    color: white;
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
  }

  .project-media video {
    width: 100%;
    height: 100%;
  }

`
