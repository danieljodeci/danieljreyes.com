import React, {Component, Fragment} from 'react'

// Components
import Parallax from 'react-rellax';
import { IoMdArrowForward } from 'react-icons/io';
import Modal from '../../Home/components/Modal';
import Router from 'next/router'
import Video from './Video'
import Fade from 'react-reveal/Fade';

// CSS
import styles from '../styles/works'
import cn from 'classnames'

export default class BudSpot extends Component {
  state = {
    active: false,
    root: false
  }

  componentDidMount(){
    const { router:{pathname} } = this.props;
    const arr = pathname.split('/')
    if(arr[1] == 'works' && arr[2] == 'budspot'){
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
                <div className="project-media" style={{height: 600, maxWidth: 330}}>
                  <Video
                    src="https://storage.googleapis.com/budspot-storage/budspot_demo.mp4"
                    thumbnail="/static/images/budspot_demo_thumbnail.png"
                    muted={true}
                  />
                </div>

                {/* Description */}
                <div className="project-description">
                  <h3>BudSpot<strong>.</strong></h3>
                  <p><a href="https://budspot.com">BudSpot</a> is a peer to peer experience marketplace that aims to connect hosts offering social locations to the general public. BudSpot's platform allows hosts to monetize their residential space as a place for guests to partake social experiences. Hosts can create menus, provide amenities, manage their session times, and set their own prices. Currently operating in Los Angeles, CA.</p>
                  <p>I lead the development of the fully isomorphic PWA (progressive web application) using the MERN stack. The app contains a multitude of third party API integrations such as: </p>
                  <ul>
                    <li><p>Twilio for two-factor authentication and text message notifications</p></li>
                    <li><p>Socket.io for instant messaging and web notifications</p></li>
                    <li><p>JWT for issuing access and refresh tokens</p></li>
                    <li><p>Checkr for running background checks</p></li>
                    <li><p>Stripe for peer to peer transactions</p></li>
                    <li><p>Google Maps for location based services</p></li>
                    <li><p>Google Cloud Storage for media uploads</p></li>
                    <li><p>Workbox for service workers and caching</p></li>
                  </ul>
                  <p> I also set up the devop infrastructure using Google Cloud Platform for web hosting, cron jobs, load balancing, pub/sub messaging, and cloud storage.</p>
                </div>
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        </Modal>
        <Parallax className="project-section" speed={mobile || tablet ? 0 : 4}>
          <Fade>
            <figure className="project right" onClick={() => {
              this.setState({active: true}, () => {
                Router.push('/works/budspot')
              })
            }}>
              <em>view project <IoMdArrowForward /></em>
              <img src="/static/images/budspot.png" />
              <figcaption>BudSpot<strong>.</strong></figcaption>
            </figure>
            <style jsx>{styles}</style>
          </Fade>
        </Parallax>
      </Fragment>
    )
  }
}