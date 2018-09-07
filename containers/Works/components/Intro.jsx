import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';
import Fade from 'react-reveal/Fade'

export default class Intro extends Component {
  render(){
    const { mobile, tablet } = this.props
    return (
      <Parallax className="project-section" style={{maxHeight: (mobile || tablet) ? 800 : 500}} speed={mobile || tablet ? 0 : 7}>
        <Fade>
          <p className="works-intro">I started my exploration into technology as a musician, attempting to recreate physical phenomena found in sound into experiential environments. With this curiousity, came the need to learn a multitude of tech stacks in order to produce the final output. Familiarizing myself with multiple languages over time enhanced my ability to recognize the similarities between most languages and acquire the skill to adapt to emerging technologies as efficiently as possible. Here you can view some of the selected works that helped me develop these skills.</p>
          <style jsx>{styles}</style>
        </Fade>
      </Parallax>
    )
  }
}