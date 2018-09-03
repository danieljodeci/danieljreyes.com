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
import Router from 'next/router';
import SmoothScroll from '../../utils/SmoothScroll';

// Containers
const DJ808 = dynamic(import('./components/DJ808'), {ssr: false, loading: () => null});
const Nav = dynamic(import('./components/Nav'), {ssr: false, loading: () => null});
const Introduction = dynamic(import('./components/Introduction'), {ssr: false, loading: () => null});
const About = dynamic(import('../About'), {ssr: false, loading: () => null})
const Works = dynamic(import('../Works'), {ssr: false, loading: () => null})
const Publications = dynamic(import('../Publications'), {ssr: false, loading: () => null})
const Sounds = dynamic(import('../Sounds'), {ssr: false, loading: () => null})
const Footer = dynamic(import('./components/Footer'), {ssr: false, loading: () => null})
import Background from './components/Background'

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
    if(!this.props.mobile) SmoothScroll()
    this.handleScroll = throttle(e => {
      if(!this.state.introModal && !this.props.mobile){
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
    const { router:{pathname}, mobile } = this.props;

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

    this.setState({introModal: false, drumVisible: !mobile, navVisible: !mobile})
  }

  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    const { introModal, drumVisible, navVisible, isScrolling } = this.state;
    const { mobile } = this.props
    return (
      <div id="page-content">
        {/* Intro Modal */}
        <Modal active={introModal}>
          <div className="align-center justify-center full-height full-width">
            <Animation mobile={mobile} onComplete={this.onAnimationComplete} />
            <Background mobile={mobile} />
          </div>
        </Modal>

        {/* Background */}
        <Background mobile={mobile} />

        {/* Navigator */}
        <Nav active={navVisible} mobile={mobile} />

        {/* Drum Machine */}
        <DJ808 active={drumVisible} mobile={mobile} onToggle={() => this.setState({drumVisible: !drumVisible})} />
        
        {/* Introduction */}
        <Introduction mobile={mobile} onEnter={() => {
          !navVisible && this.setState({navVisible: true});
          !isScrolling && Router.push('/', '/', {shallow: true})
        }}/>

        {/* About */}
        <About mobile={mobile} onEnter={() => !isScrolling && Router.push('/about', '/about', {shallow: true})} />

        {/* Featured Works */}
        <Works mobile={mobile} onEnter={() => {
          navVisible && this.setState({navVisible: false});
          !isScrolling && Router.push('/works', '/works', {shallow: true});
        }} {...this.props} />

        {/* Sounds */}
        <Sounds mobile={mobile} onEnter={() => !isScrolling && Router.push('/sounds', '/sounds', {shallow: true})} />

        {/* Publications */}
        <Publications mobile={mobile} onEnter={() => !isScrolling && Router.push('/publications', '/publications', true)} />

        {/* Footer */}
        <Footer mobile={mobile}/>
        
        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default PageWrapper(Home, {
  metaData: ({router}) => {
    const { pathname } = router;
    const arr = pathname.split('/');
    switch(arr[1]){
      case 'about':
        return {
          title: 'About - DANIEL JODECI',
          link: [],
          meta: [
            { name: 'About - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
            { property: "og:title", content: 'About - DANIEL JODECI' },
            { property: "og:description", content: 'Artist / Developer / Engineer' },
            { property: "og:type", content: "website" },
          ]
        }
      case 'works':
        if(arr[2] == 'budspot'){
          return {
            title: 'BudSpot. - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'BudSpot. - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/budspot.png' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'BudSpot. - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else if(arr[2] == 'robopiano'){
          return {
            title: 'Robopiano - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'Robopiano - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/robopiano.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'Robopiano - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else if(arr[2] == 'hpiso16'){
          return {
            title: 'HPISO16 - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'HPISO16 - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/hpiso16.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'HPISO16 - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else if(arr[2] == 'foldable-case'){
          return {
            title: '9U 104HP - DANIEL JODECI',
            link: [],
            meta: [
              { name: '9U 104HP - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/foldable_case.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: '9U 104HP - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else if(arr[2] == 'resonant-spectra'){
          return {
            title: 'Resonant Spectra - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'Resonant Spectra - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/resonant_spectra.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'Resonant Spectra - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else if(arr[2] == 'post-wave'){
          return {
            title: 'Post-Wave - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'Post-Wave - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/post-wave.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'Post-Wave - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else if(arr[2] == 'artifacts'){
          return {
            title: 'Artifacts - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'Artifacts- DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/artifacts.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'Artifacts - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }else{
          return {
            title: 'Selected Works - DANIEL JODECI',
            link: [],
            meta: [
              { name: 'Selected Works - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
              { property: 'og:image', content: '/static/images/blendo.jpg' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '640' },
              { property: 'og:image:height', content: '640' },
              { property: "og:title", content: 'Selected Works - DANIEL JODECI' },
              { property: "og:description", content: 'Artist / Developer / Engineer' },
              { property: "og:type", content: "website" },
            ]
          }
        }
      case 'sounds':
        return {
          title: 'Sounds - DANIEL JODECI',
          link: [],
          meta: [
            { name: 'Sounds - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
            { property: 'og:image', content: '/static/images/pascual_fuentes.jpg' },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '640' },
            { property: 'og:image:height', content: '640' },
            { property: "og:title", content: 'Sounds - DANIEL JODECI' },
            { property: "og:description", content: 'Artist / Developer / Engineer' },
            { property: "og:type", content: "website" },
          ]
        }
      case 'publications':
        return {
          title: 'Publications - DANIEL JODECI',
          link: [],
          meta: [
            { name: 'Publications - DANIEL JODECI', content: 'Artist / Developer / Engineer' },
            { property: "og:title", content: 'Publications - DANIEL JODECI' },
            { property: "og:description", content: 'Artist / Developer / Engineer' },
            { property: "og:type", content: "website" },
          ]
        }
      default:
        return {
          title: 'DANIEL JODECI',
          link: [],
          meta: [
            { name: 'DANIEL JODECI - Artist / Developer / Engineer', content: 'Portfolio Site' },
            { property: "og:title", content: 'DANIEL JODECI - Artist / Developer / Engineer' },
            { property: "og:description", content: 'Portfolio Site' },
            { property: "og:type", content: "website" },
          ]
        }
    }
  },
})