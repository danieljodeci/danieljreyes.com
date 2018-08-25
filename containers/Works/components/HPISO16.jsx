import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class HPISO16 extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={1}>
        <figure className="project right">
          <em>view project -></em>
          <img src="/static/images/hpiso16.jpg" />
          <figcaption>HPISO16</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}