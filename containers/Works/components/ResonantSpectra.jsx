import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import Router from 'next/router'
import Fade from 'react-reveal/Fade'

// CSS
import styles from '../styles/works'
import cn from 'classnames'

export default class ResonantSpectra extends Component {
  state = {
    active: false,
    root: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'resonant-spectra'){
      const component = this;
      this.timeout = setTimeout(() => component.setState({active: true, root: true}), 1500)
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  render(){
    const { mobile, tablet } = this.props
    return (
      <Fragment>
        <Modal active={this.state.active} onToggleModal={() => {
          this.setState({active: !this.state.active}, () => {
            this.state.root ? Router.push('/') : Router.back()
          })
        }}>
          <div className="project-container">
            <div className="full-width full-height align-center justify-center">
              <div className={cn('align-center', {
                ['flex-row']: !mobile && !tablet, 
                ['flex-column']: mobile || tablet
              })}>

                {/* Project Media */}
                <div className="project-media">
                  <div style={{
                    padding: "56.25% 0 0 0",
                    position: "relative"
                  }}>
                    <iframe 
                      src="https://player.vimeo.com/video/125831860?autoplay=1&loop=1&color=efe2e0&title=0&byline=0&portrait=0" 
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                      }} 
                      frameBorder="0" 
                      allowFullScreen
                    >
                    </iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>Resonant Spectra</h3>
                  <p>'resonant spectra' consists of two fundamental elements, the instruments, and the sculpture. the instruments are driven by two different sustaining techniques; two through physical contact with felt smoothing discs, and another through magnetic copper coils. oscillating at a very low frequency, the string instruments rise in pitch very slowly via a servo-mounted tuning peg. the sculpture's design is based off Helmholtz formula for a resonating spherical cavity. Each pair of resonators are tuned to a harmonic series of a low E (41hz), then up to the 6th harmonic. The reasoning behind the orientation of each pair of resonators can be explained through acoustic propulsion: when the resonating frequency of a resonator is being produced in a space, a vortex shedding pushes air out of the openings of the resonator, resulting in rotational motion. the goal of this installation is to activate the rotation of the spectral sculpture with the resonating frequencies in the room. a subwoofer is placed in the center of the room to help reinforce lower frequencies. in order achieve rotation, levels much reach up to 110db. presented in the wavecave @ california institute of the arts (2015).</p>
                  <p>Tech used to complete this project: </p>
                  <ul>
                    <li><p>Altium</p></li>
                    <li><p>Solidworks</p></li>
                    <li><p>ChucK</p></li>
                    <li><p>SPICE</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={0}>
          <Fade>
            <figure className="project right" onClick={() => {
              this.setState({active: true}, () => {
                Router.push('/works/resonant-spectra')
              })
            }}>
              <em>view project <IoMdArrowForward /></em>
              <img src="/static/images/resonant_spectra.jpg" />
              <figcaption>Resonant Spectra</figcaption>
            </figure>
            <style jsx>{styles}</style>
          </Fade>
        </Parallax>
      </Fragment>
    )
  }
}