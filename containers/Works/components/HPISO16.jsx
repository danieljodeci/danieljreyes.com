import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';

// CSS
import styles from '../styles/works'

export default class HPISO16 extends Component {
  state = {
    active: false
  }

  render(){
    return (
      <Fragment>
        <Modal active={this.state.active} onToggleModal={() => this.setState({active: !this.state.active})}>
          <div className="section-container">
            <div className="section-row">
              <p>HPISO16</p>
            </div>
          </div>
        </Modal>
        <Parallax className="project-section" speed={1}>
          <figure className="project right" onClick={() => this.setState({active: true})}>
            <em>view project <IoMdArrowForward /></em>
            <img src="/static/images/hpiso16.jpg" />
            <figcaption>HPISO16</figcaption>
          </figure>
          <style jsx>{styles}</style>
        </Parallax>
      </Fragment>
    )
  }
}