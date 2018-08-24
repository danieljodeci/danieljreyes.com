import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class BudSpot extends Component {
  render(){
    return (
      <Parallax className="right-section" speed={7}>
        <p className="works-intro">I started my exploration into technology as a musician, attempting to recreate physical phenomena found in sound into experiential environments. With this curiousity, came the need to learn a multitude of tech stacks in order to execute the final product. Familiarizing myself with multiple languages over time increased my ability to adapt and pick up a new technology as efficiently as possible. Here you can view some of the selected works that helped me develop these skills.</p>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}