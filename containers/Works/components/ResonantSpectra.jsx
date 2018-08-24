import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';

export default class ResonantSpectra extends Component {
  render(){
    return (
      <Parallax className="right-section" speed={0}>
        <figure className="budspot-project">
          <em>view project -></em>
          <img src="/static/images/resonant_spectra.jpg" />
          <figcaption>Resonant Spectra</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}