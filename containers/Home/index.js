import React, {Component} from 'react'

// Utils
import dynamic from 'next/dynamic';
import throttle from 'lodash.throttle';

// HOCS
import PageWrapper from '../../hocs/Page'

// Components
const Sketch = dynamic(import('./components/Sketch'), {ssr: false})
import Modal from './components/Modal'
import Animation from './components/Animation'
import Waypoint from 'react-waypoint'
import SmoothScroll from '../../utils/SmoothScroll';

// Containers
const DJ808 = dynamic(import('./components/DJ808'), {ssr: false});
const Introduction = dynamic(import('./components/Introduction'), {ssr: false});
const About = dynamic(import('../About'), {ssr: false})
const Works = dynamic(import('../Works'), {ssr: false})
import Background from './components/Background';

// CSS
import styles from './styles/home'
import { primary } from '../../hocs/Page/styles/colors';


class Home extends Component {
  state = {
    introModal: false,
    drumVisible: true
  }

  componentDidMount(){
    window.addEventListener('scroll', throttle(e => {
      if(!this.state.introModal){
        if(window.scrollY > 0 && this.state.drumVisible){
          this.setState({drumVisible: false})
        }else if(window.scrollY == 0 && !this.state.drumVisible){
          this.setState({drumVisible: true})
        }
      }
    }, 500), {passive: true})
  }

  render(){
    const { introModal, drumVisible } = this.state;
    return (
      <div id="page-content">
        {/* Intro Modal */}
        <Modal active={this.state.introModal}>
          <div className="align-center full-height full-width">
            <Animation onComplete={() => introModal && this.setState({introModal: false, drumVisible: true})} />
          </div>
        </Modal>

        {/* Background */}
        <Background />

        {/* Drum Machine */}
        <DJ808 active={drumVisible} />
        
        {/* Introduction */}
        <Introduction onEnter={() => console.log('intro')}/>

        {/* About */}
        <About onEnter={() => console.log('about')} />

        {/* Featured Works */}
        <Works onEnter={() => console.log('works')} />

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