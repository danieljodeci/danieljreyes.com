import css from 'styled-jsx/css'

export default css`
  nav {
    position: fixed;
    top: 250px;
    right: -200px;
    z-index: 99;
    opacity: 0;
    transition: opacity 800ms ease-in;
  }

  nav.active {
    opacity: 1;
    transition: opacity 800ms ease-in;
  }

  nav ul {
    list-style: none;
    transform: rotate(-90deg);
  }

  nav li {
    display: inline-block;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-size: 40px;
    line-height: 28px;
    margin-right: 36px;
    text-decoration: none;
    display: inline-block;
  }
`