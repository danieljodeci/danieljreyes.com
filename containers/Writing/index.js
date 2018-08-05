import React, {Component} from 'react'
import Link from 'next/link'
import enhancedComponent from '../../hocs/Enhanced'

class Writing extends Component {
  render(){
    return (
      <div>
        <Link href="/"><a>home</a></Link>
      </div>
    )
  }
}

export default enhancedComponent(Writing, {
  metaData: {
    title: 'Writing - DANIEL JODECI',
    link: [],
    meta: [
      { name: 'Writing - DANIEL JODECI', content: 'Portfolio Site' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '640' },
      { property: 'og:image:height', content: '640' },
      { property: "og:title", content: 'Writing - DANIEL JODECI' },
      { property: "og:description", content: 'Portfolio Site' },
      { property: "og:type", content: "website" },
    ]
  },
})