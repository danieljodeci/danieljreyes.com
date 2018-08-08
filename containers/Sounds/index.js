import React, {Component} from 'react'
import Link from 'next/link'
import PageWrapper from '../../hocs/Page'

class Sounds extends Component {
  render(){
    return (
      <div>
        <Link href="/"><a>home</a></Link>
      </div>
    )
  }
}

export default PageWrapper(Sounds, {
  metaData: {
    title: 'Sounds - DANIEL JODECI',
    link: [],
    meta: [
      { name: 'Sounds - DANIEL JODECI', content: 'Portfolio Site' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '640' },
      { property: 'og:image:height', content: '640' },
      { property: "og:title", content: 'Sounds - DANIEL JODECI' },
      { property: "og:description", content: 'Portfolio Site' },
      { property: "og:type", content: "website" },
    ]
  },
})