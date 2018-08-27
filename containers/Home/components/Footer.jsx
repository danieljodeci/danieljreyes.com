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
              <h2>I am always interested about unique ideas and challenging projects. Do you have a cool idea or project? <br/><span><a href="mailto:danieljodecireyes@gmail.com">Hit me up.</a></span></h2>
              <div className="social-nav">
                <ul>
                  <li><a href="mailto:danieljodecireyes@gmail.com"><IoIosMail /></a></li>
                  <li><a href="https://github.com/danieljodeci" target="_blank"><IoLogoGithub /></a></li>
                  <li><a href="https://www.linkedin.com/in/daniel-reyes-7554b2a9" target="_blank"><IoLogoLinkedin /></a></li>
                  <li><a href="https://soundcloud.com/djodeci" target="_blank"><FaSoundcloud /></a></li>
                  <li><a href="https://twitter.com/pascualfuentes" target="_blank"><IoLogoTwitter /></a></li>
                  <li><a href="https://www.instagram.com/danieljodeci/" target="_blank"><IoLogoInstagram /></a></li>
                </ul>
              </div>
              <div className="bottom-text">
                <p>You can view the source for this site on <a href="https://github.com/danieljodeci/danieljreyes.com" target="_blank">Github</a></p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </footer>
    )
  }
}