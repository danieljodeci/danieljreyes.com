import React, {Component} from 'react'
import Link from 'next/link'
import PageWrapper from '../../hocs/Page'
import dynamic from 'next/dynamic';
const Sketch = dynamic(import('./components/Sketch'), {ssr: false})
import Modal from './components/Modal'
import Animation from './components/Animation'
import Introduction from './components/Introduction'
import DJ808 from './components/DJ808';
import Background from './components/Background';
import styles from './styles/home'

class Home extends Component {
  state = {
    active: true
  }

  render(){
    return (
      <section id="home">
        {/* Intro Modal */}
        <Modal active={this.state.active}>
          <div className="align-center full-height full-width">
            <Animation onComplete={() => this.setState({active: false})} />
          </div>
        </Modal>

        {/* Drum Machine */}
        <DJ808 active={!this.state.active} />

        {/* Background */}
        <Background />
        
        {/* Body */}
        <div className="container">
          <div className="flex-column full-height">
            <Introduction />
            {/* <Sketch /> */}
          </div>
        </div>
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