import React, {Component} from 'react'
import Link from 'next/link'
import enhancedComponent from '../../hocs/Enhanced'
import Animation from './components/Animation'

class Home extends Component {
  render(){
    return (
      <div>
        <Animation />
      </div>
    )
  }
}

export default enhancedComponent(Home, {
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