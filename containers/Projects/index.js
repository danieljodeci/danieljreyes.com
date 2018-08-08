import React, {Component} from 'react'
import Link from 'next/link'
import PageWrapper from '../../hocs/Page'

class Projects extends Component {
  render(){
    return (
      <div>
        <Link href="/"><a>home</a></Link>
      </div>
    )
  }
}

export default PageWrapper(Projects, {
  metaData: {
    title: 'Projects - DANIEL JODECI',
    link: [],
    meta: [
      { name: 'Projects - DANIEL JODECI', content: 'Portfolio Site' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '640' },
      { property: 'og:image:height', content: '640' },
      { property: "og:title", content: 'Projects - DANIEL JODECI' },
      { property: "og:description", content: 'Portfolio Site' },
      { property: "og:type", content: "website" },
    ]
  },
})