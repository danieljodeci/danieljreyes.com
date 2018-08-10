import React, {Component} from 'react'
import styles from '../styles/introduction'

export default class Introduction extends Component {
  render(){
    return (
      <section id="intro" className="full-height">
        <div className="container">
          <h1>Hi<strong>,</strong></h1>
          <h3>I go by</h3>
          <h2>Daniel<strong>.</strong></h2>
        </div>

        <div className="description">
  
          <svg className="knockout-text-container" width="100%" height="100%" transform="rotate(-90)">
            
            <rect className="knockout-text-bg" width="100%" height="100%" x="0" y="0" fillOpacity="1" mask="url(#knockout-text)" />
            
            <mask id="knockout-text">
              <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
              <text x="20px" y="45px" fill="#000" textAnchor="left">I am an Artist,</text> 
              <text x="20px" y="85px" fill="#000" textAnchor="left">Full-Stack Developer, </text>
              <text x="20px" y="125px" fill="#000" textAnchor="left">and maker of things </text>
              <text x="20px" y="165px" fill="#000" textAnchor="left">who is based in Los Angeles.</text>
            </mask>
            
          </svg>
          
        </div>

        <style jsx>{styles}</style>
      </section>
    )
  }
}