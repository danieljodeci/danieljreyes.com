import React, {Component} from 'react'

// Utils
import dynamic from 'next/dynamic';
import throttle from 'lodash.throttle';

// HOCS
import PageWrapper from '../../hocs/Page'

// Components
import Modal from './components/Modal'
import Animation from './components/Animation'
import { scroller, Events } from 'react-scroll'
import SmoothScroll from '../../utils/SmoothScroll';
import Router from 'next/router';

// Containers
const DJ808 = dynamic(import('./components/DJ808'), {ssr: false, loading: () => null});
const Nav = dynamic(import('./components/Nav'), {ssr: false, loading: () => null});
const Introduction = dynamic(import('./components/Introduction'), {ssr: false, loading: () => null});
const About = dynamic(import('../About'), {ssr: false, loading: () => null})
const Works = dynamic(import('../Works'), {ssr: false, loading: () => null})
const Publications = dynamic(import('../Publications'), {ssr: false, loading: () => null})
const Sounds = dynamic(import('../Sounds'), {ssr: false, loading: () => null})
const Footer = dynamic(import('./components/Footer'), {ssr: false, loading: () => null})
import Background from './components/Background';

// CSS
import styles from './styles/home'

class Home extends Component {
  state = {
    introModal: true,
    drumVisible: false,
    navVisible: false,
    isScrolling: true
  }

  componentDidMount(){
    this.handleScroll = throttle(e => {
      if(!this.state.introModal){
        if(window.scrollY > 0 && this.state.drumVisible){
          this.setState({drumVisible: false})
        }else if(window.scrollY == 0 && !this.state.drumVisible){
          this.setState({drumVisible: true})
        }
      }
    })

    window.addEventListener('scroll', this.handleScroll, 500, {passive: true})

    const component = this;
    Events.scrollEvent.register('begin', function(to, element) {
      component.setState({isScrolling: true})
    });
    Events.scrollEvent.register('end', function(to, element) {
      component.setState({isScrolling: false})
    });
  }

  onAnimationComplete = () => {
    if(!this.state.introModal) return;
    const { router:{pathname} } = this.props;

    window.scrollTo(0, 0);
    // Scroll to section if pathname applies
    const arr = pathname.split('/')
    if(arr[1] && arr[1].length){
      setTimeout(() => {
        scroller.scrollTo(arr[1], {
          duration: 1000,
          delay: 100,
          smooth: true
        })
      }, 1000)
    }else{
      this.setState({isScrolling: false})
    }

    this.setState({introModal: false, drumVisible: true, navVisible: true})
  }

  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    const { introModal, drumVisible, navVisible, isScrolling } = this.state;
    return (
      <div id="page-content">
        {/* Intro Modal */}
        <Modal active={this.state.introModal}>
          <div className="align-center justify-center full-height full-width">
            <Animation onComplete={this.onAnimationComplete} />
            <Background />
          </div>
        </Modal>

        {/* Background */}
        <Background />

        {/* Navigator */}
        <Nav active={navVisible} />

        {/* Drum Machine */}
        <DJ808 active={drumVisible} />
        
        {/* Introduction */}
        <Introduction onEnter={() => {
          !navVisible && this.setState({navVisible: true});
          !isScrolling && Router.push('/')
        }}/>

        {/* About */}
        <About onEnter={() => !isScrolling && Router.push('/about')} />

        {/* Featured Works */}
        <Works onEnter={() => {
          navVisible && this.setState({navVisible: false});
          !isScrolling && Router.push('/works');
        }} {...this.props} />

        {/* Sounds */}
        <Sounds onEnter={() => !isScrolling && Router.push('/sounds')} />

        {/* Publications */}
        <Publications onEnter={() => !isScrolling && Router.push('/publications')} />

        {/* Footer */}
        <Footer />
        
        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default PageWrapper(Home, {
  metaData: {
    title: 'DANIEL JODECI',
    link: [],
    meta: [
      { name: 'DANIEL JODECI - Artist / Developer / Engineer', content: 'Portfolio Site' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '640' },
      { property: 'og:image:height', content: '640' },
      { property: "og:title", content: 'DANIEL JODECI - Artist / Developer / Engineer' },
      { property: "og:description", content: 'Portfolio Site' },
      { property: "og:type", content: "website" },
    ]
  },
})