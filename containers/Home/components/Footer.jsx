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
import styles from '../styles/footer'

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <div className="section-container">
          <div className="section-row">
            <div className="full-width">
              <div className="text-top">
                <h3>HIRE<br/>ME</h3>
              </div>
              <h2>I am always interested about unique ideas and challenging projects. Do you have a cool idea or project? <br/><span>Hit me up</span></h2>
              <div className="social-nav">
                <ul>
                  <li><a><IoIosMail /></a></li>
                  <li><a><IoLogoGithub /></a></li>
                  <li><a><IoLogoLinkedin /></a></li>
                  <li><a><FaSoundcloud /></a></li>
                  <li><a><IoLogoTwitter /></a></li>
                  <li><a><IoLogoInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </footer>
    )
  }
}