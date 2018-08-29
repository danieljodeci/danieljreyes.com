import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import {IoMdVolumeOff, IoMdVolumeHigh} from 'react-icons/io'
import Router from 'next/router'

// CSS
import styles from '../styles/works'

export default class PostWave extends Component {
  state = {
    active: false,
    muted: true,
    root: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'post-wave'){
      const component = this;
      this.timeout = setTimeout(() => component.setState({active: true, root: true}), 1500)
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  render(){
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
                      src="https://storage.googleapis.com/budspot-storage/Post-Wave.mp4" 
                    />
                  </video>
                  <button onClick={() => this.setState({muted: !this.state.muted})}>
                    {this.state.muted ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
                  </button>
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>Post-Wave</h3>
                  <p>A kinetic wood sculpture inspired by the work of Reuben Margolin. An Xbox Kinect is used to control a pair of DC motors to activate the waves of the sculpture.</p>
                  <p>Tech used to complete this project: </p>
                  <ul>
                    <li><p>Arduino</p></li>
                    <li><p>Processing</p></li>
                    <li><p>Xbox Kinect</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={1}>
          <figure className="project left" onClick={() => {
            this.setState({active: true}, () => {
              Router.push('/works/post-wave')
            })
          }}>
            <em>view project <IoMdArrowForward /></em>
            <img src="/static/images/post-wave.jpg" />
            <figcaption>Post-<br/>Wave</figcaption>
          </figure>
          <style jsx>{styles}</style>
        </Parallax>
      </Fragment>
    )
  }
}