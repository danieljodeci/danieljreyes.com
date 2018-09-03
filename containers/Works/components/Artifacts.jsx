import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import Router from 'next/router'

// CSS
import styles from '../styles/works'
import cn from 'classnames'

export default class Artifacts extends Component {
  state = {
    active: false,
    root: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'artifacts'){
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
              <div className={cn({
                ['flex-row']: !mobile && !tablet, 
                ['flex-column']: mobile || tablet,
                ['align-center']: mobile || tablet
              })}>

                {/* Project Media */}
                <div className="project-media">
                  <img src="/static/images/artifacts.png" />
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>Artifacts</h3>
                  <p>Exposing the artifacts in one’s self image through an array of iPhone and iPad cameras. Each successive phone captures its’ neighboring screen, amplifying the distortion of signals until one’s self image becomes indistinguishable; an aliasing selfie.</p>
                  <p>Tech used to complete this project: </p>
                  <ul>
                    <li><p>Solidworks</p></li>
                    <li><p>iPhone 5</p></li>
                    <li><p>iPhone 6</p></li>
                    <li><p>iPad</p></li>
                    <li><p>Taz 5 3D Printer</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={mobile || tablet ? 0 : -1}>
          <figure className="project right" onClick={() => {
            this.setState({active: true}, () => {
              Router.push('/works/artifacts')
            })
          }}>
            <em>view project <IoMdArrowForward /></em>
            <img src="/static/images/artifacts.png" />
            <figcaption>Artifacts</figcaption>
          </figure>
          <style jsx>{styles}</style>
        </Parallax>
      </Fragment>
    )
  }
}