import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';

export default class Intro extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={1}>
        <p className="sounds-intro">Although most of my time is currently occupied with software development projects, I still try to find the time to create sounds to relieve some of the stresses that come with my day to day work ethic.</p>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}