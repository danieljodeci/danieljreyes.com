import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class Artifacts extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={-1}>
        <figure className="project right">
          <em>view project -></em>
          <img src="/static/images/artifacts.png" />
          <figcaption>Artifacts</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}