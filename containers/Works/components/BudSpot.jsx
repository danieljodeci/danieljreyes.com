import React, {Component} from 'react'
import styles from '../styles/works'
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';

export default class BudSpot extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={4}>
        <figure className="project right">
          <em>view project <IoMdArrowForward /></em>
          <img src="/static/images/budspot.png" />
          <figcaption>BudSpot<strong>.</strong></figcaption>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}