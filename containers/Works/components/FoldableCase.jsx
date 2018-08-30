import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import Router from 'next/router'

// CSS
import styles from '../styles/works'
import cn from 'classnames'

export default class FoldableCase extends Component {
  state = {
    active: false,
    root: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'foldable-case'){
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
          <div className="project-container">
            <div className="full-width full-height align-center justify-center">
              <div className={cn({
                ['flex-row']: !mobile, 
                ['flex-column']: mobile,
                ['align-center']: mobile
              })}>

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
                      src="https://storage.googleapis.com/budspot-storage/9u104hp.mp4" 
                    />
                  </video>
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>9U 104HP</h3>
                  <p>I designed and assembled a foldable case in Solidworks to host Eurorack synthesizer modules. Designs were sent to a local metal shop to have manufactured.</p>
                  <p>Tech used to complete this project: </p>
                  <ul>
                    <li><p>Solidworks</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={mobile ? 0 : 1}>
          <figure className="project left" onClick={() => {
            this.setState({active: true}, () => {
              Router.push('/works/foldable-case')
            })
          }}>
            <em>view project <IoMdArrowForward /></em>
            <img src="/static/images/foldable_case.jpg" />
            <figcaption>9U 104HP</figcaption>
          </figure>
          <style jsx>{styles}</style>
        </Parallax>
      </Fragment>
    )
  }
}