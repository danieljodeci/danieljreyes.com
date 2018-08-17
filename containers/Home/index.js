import React, {Component} from 'react'
import Link from 'next/link'
import PageWrapper from '../../hocs/Page'
import dynamic from 'next/dynamic';
const Sketch = dynamic(import('./components/Sketch'), {ssr: false})
import Modal from './components/Modal'
import Animation from './components/Animation'
const Introduction = dynamic(import('./components/Introduction'), {ssr: false});
const DJ808 = dynamic(import('./components/DJ808'), {ssr: false});
import Background from './components/Background';
import styles from './styles/home'
import { primary } from '../../hocs/Page/styles/colors';
import Waypoint from 'react-waypoint'
import SmoothScroll from '../../utils/SmoothScroll';
import throttle from 'lodash.throttle';


class Home extends Component {
  state = {
    introModal: true,
    drumVisible: false
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
      <section id="home">
        {/* Intro Modal */}
        <Modal active={this.state.introModal}>
          <div className="align-center full-height full-width">
            <Animation onComplete={() => introModal && this.setState({introModal: false, drumVisible: true})} />
          </div>
        </Modal>

        {/* Drum Machine */}
        <DJ808 active={drumVisible} />

        {/* Background */}
        <Background />
        
        {/* Introduction */}
        <Introduction  />

        {/* About */}
        <Waypoint>
          <div className="container">
            <div className="flex-column full-height">
              {/* <About /> */}
            </div>
          </div>
        </Waypoint>

        {/* Featured Works */}
        <Waypoint onEnter={() => console.log('featured-works')}>
          <div className="container">
            <div className="flex-column full-height">
              {/* <About /> */}
            </div>
          </div>
        </Waypoint>

        {/* Sounds */}
        <Waypoint onEnter={() => console.log('sounds')}>
          <div className="container">
            <div className="flex-column full-height">
              {/* <About /> */}
            </div>
          </div>
        </Waypoint>


        <style jsx>{styles}</style>
      </section>
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