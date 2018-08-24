import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class Artifacts extends Component {
  render(){
    return (
      <Parallax className="right-section" speed={-1}>
        <figure className="budspot-project">
          <em>view project -></em>
          <img src="/static/images/artifacts.png" />
          <figcaption>Artifacts</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}