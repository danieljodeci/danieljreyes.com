import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';

// CSS
import styles from '../styles/works'

export default class Robopiano extends Component {
  state = {
    active: false
  }

  render(){
    return (
      <Fragment>
        <Modal active={this.state.active} horizontal onToggleModal={() => this.setState({active: !this.state.active})}>
          <div className="section-container">
            <div className="section-row">
              <p>Robopiano</p>
            </div>
          </div>
        </Modal>
        <Parallax className="project-section" speed={3}>
          <figure className="project left" onClick={() => this.setState({active: true})}>
            <em>view project <IoMdArrowForward /></em>
            <img src="/static/images/robopiano.jpg" />
            <figcaption>Robopiano</figcaption>
          </figure>
          <style jsx>{styles}</style>
        </Parallax>
      </Fragment>
    )
  }
}