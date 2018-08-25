import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class Robopiano extends Component {
  render(){
    return (
      <Parallax className="left-section" speed={3}>
        <figure className="project left">
          <em>view project -></em>
          <img src="/static/images/robopiano.jpg" />
          <figcaption>Robopiano</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}