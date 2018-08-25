import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class FoldableCase extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={1}>
        <figure className="project left">
          <em>view project -></em>
          <img src="/static/images/foldable_case.jpg" />
          <figcaption>9U 104HP</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}