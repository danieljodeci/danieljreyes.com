import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import Router from 'next/router'

// CSS
import styles from '../styles/works'

export default class HPISO16 extends Component {
  state = {
    active: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'hpiso16'){
      const component = this;
      this.timeout = setTimeout(() => component.setState({active: true}), 1500)
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  render(){
    return (
      <Fragment>
        <Modal active={this.state.active} onToggleModal={() => {
          this.setState({active: !this.state.active}, () => {
            Router.back()
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
                    muted={true} 
                    playsInline={true}
                    preload="metadata"
                  >
                    <source 
                      type="video/mp4" 
                      src="https://storage.googleapis.com/budspot-storage/HPISO16.mp4" 
                    />
                  </video>
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>HPISO16</h3>
                  <p>HPISO-16 is an optically-isolated, high-power driver shield for the Arduino Uno. The stackable shield can control up to 16 high powered solenoids/servos/motors, but can also be expanded up to 256 actuators when stacked.</p>
                  <p>Tech used to complete this project: </p>
                  <ul>
                    <li><p>Arduino</p></li>
                    <li><p>Altium</p></li>
                    <li><p>SPICE</p></li>
                  </ul>
                  <p>This project was commissioned by composer Brian Parkhurst.</p>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={1}>
          <figure className="project right" onClick={() => {
            this.setState({active: true}, () => {
              Router.push('/works/hpiso16')
            })
          }}>
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