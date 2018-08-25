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
          <li><a><IoIosMail /></a></li>
          <li><a><IoLogoGithub /></a></li>
          <li><a><IoLogoLinkedin /></a></li>
          <li><a><FaSoundcloud /></a></li>
          <li><a><IoLogoTwitter /></a></li>
          <li><a><IoLogoInstagram /></a></li>
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

