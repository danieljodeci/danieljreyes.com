import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';

export default class ResonantSpectra extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={0}>
        <figure className="project right">
          <em>view project <IoMdArrowForward /></em>
          <img src="/static/images/resonant_spectra.jpg" />
          <figcaption>Resonant Spectra</figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}