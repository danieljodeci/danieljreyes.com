import React, {Component} from 'react'

// Components
import {
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram
} from 'react-icons/io'
import {
  FaSoundcloud
} from 'react-icons/fa'

// CSS
import styles from '../styles/nav'
import cn from 'classnames';

// HOC
import ActivableRenderer from '../../../hocs/ActivableRenderer';

class Nav extends Component {
  render(){
    const { active } = this.props;
    return (
      <nav className={cn({active})}>
        <ul>
          <li><a href="mailto:danieljodecireyes@gmail.com"><IoIosMail /></a></li>
          <li><a href="https://github.com/danieljodeci" target="_blank"><IoLogoGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/daniel-reyes-7554b2a9" target="_blank"><IoLogoLinkedin /></a></li>
          <li><a href="https://soundcloud.com/djodeci" target="_blank"><FaSoundcloud /></a></li>
          <li><a href="https://twitter.com/pascualfuentes" target="_blank"><IoLogoTwitter /></a></li>
          <li><a href="https://www.instagram.com/danieljodeci/" target="_blank"><IoLogoInstagram /></a></li>
        </ul>
        <style jsx>{styles}</style>
      </nav>
    )
  }
}

Nav.defaultProps = {
  active: true
}

export default ActivableRenderer({delay: 800})(Nav)

