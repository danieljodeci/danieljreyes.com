import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class BudSpot extends Component {
  render(){
    return (
      <Parallax className="right-section" speed={4}>
        <figure className="budspot-project">
          <em>view project -></em>
          <img src="/static/images/budspot.png" />
          <figcaption>BudSpot<strong>.</strong></figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}