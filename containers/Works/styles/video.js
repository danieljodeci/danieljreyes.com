import css from 'styled-jsx/css'

export default css`
  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  .video-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .video-container video {
    width: 100%;
    height: auto;
  }
  .video-container.incoming-video video {
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .video-container button {
    color: white;
    opacity: 0.7;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    border: none;
    -webkit-appearance: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    background: none;
  }

  .video-container button svg {
    font-size: 80px;
    height: 75px;
  }

  .video-container.fade-out div {
    -webkit-animation: fadeout 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadeout 2s; /* Firefox < 16 */
          -ms-animation: fadeout 2s; /* Internet Explorer */
          -o-animation: fadeout 2s; /* Opera < 12.1 */
              animation: fadeout 2s;
  }

  .video-container div {
    background-size: cover;
    background-position: center center;
    height: auto;
    width: 100%;
  }
`