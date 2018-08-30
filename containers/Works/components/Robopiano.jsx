import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import {IoMdVolumeOff, IoMdVolumeHigh} from 'react-icons/io'
import Router from 'next/router'

// CSS
import styles from '../styles/works'

export default class Robopiano extends Component {
  state = {
    active: false,
    muted: true,
    root: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'robopiano'){
      const component = this;
      this.timeout = setTimeout(() => component.setState({active: true, root: true}), 1500)
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  render(){
    const { mobile } = this.props
    return (
      <Fragment>
        <Modal active={this.state.active} horizontal onToggleModal={() => {
          this.setState({active: !this.state.active}, () => {
            this.state.root ? Router.push('/') : Router.back()
          })
        }}>
          <div className="section-container">
            <div className="full-width full-height align-center justify-center">
              <div className="flex-row project-body">

                {/* Project Media */}
                <div className="project-media">
                  <video key={1} 
                    id="video-player" 
                    loop={true} 
                    autoPlay={true} 
                    muted={this.state.muted} 
                    playsInline={true}
                    preload="metadata"
                  >
                    <source 
                      type="video/mp4" 
                      src="https://storage.googleapis.com/budspot-storage/robopiano.mp4" 
                    />
                  </video>
                  <button onClick={() => this.setState({muted: !this.state.muted})}>
                    {this.state.muted ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
                  </button>
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>Robopiano</h3>
                  <p>Robopiano is an attempt to actuate the guts of an upright piano. A custom Arduino shield was developed in order to multiplex 3 PWM outputs to 256 independently controlled variable high powered outputs.</p>
                  <p>Tech used to complete this project: </p>
                  <ul>
                    <li><p>Arduino</p></li>
                    <li><p>Altium</p></li>
                    <li><p>Solidworks</p></li>
                    <li><p>Processing</p></li>
                    <li><p>Ableton</p></li>
                    <li><p>ChucK</p></li>
                  </ul>
                  <p>This project was commissioned by composer Brian Parkhurst.</p>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={mobile ? 0 : 3}>
          <figure className="project left" onClick={() => {
            this.setState({active: true}, () => {
              Router.push('/works/robopiano')
            })
          }}>
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