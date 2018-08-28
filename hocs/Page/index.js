import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import styles from './styles/main'
import { withRouter } from 'next/router'

// Helps with debugging so you know what component was wrapped
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 
        WrappedComponent.name || 
        'Component'
}

export default function PageWrapper(WrappedComponent, {
  metaData,
  willMount,
  didMount,
  willUnmount
}){
  class enhancedComponent extends PureComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    componentWillMount(){
      if(willMount) willMount()
    }

    componentDidMount(){
      if(didMount) didMount()
    }

    componentWillUnmount(){
      if(willUnmount) willUnmount()
    }

    getMetaData = () => {
      let output = metaData;
      if(metaData instanceof Function) {
        output = metaData(this.props);
      }
      if(!output instanceof Object) return console.warn('Metadata is not instance of Object.');
      output.meta = [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'DANIEL JODECI' },
        { property: 'og:title', content: 'DANIEL JODECI - Artist / Developer / Engineer' },
        { property: 'og:description', content: 'Portfolio Site' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://danieljreyes/com/' },
        { property: 'og:image', content: '/static/images/cover.jpg' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1080' },
        { property: 'og:image:height', content: '1349' },
        ...output.meta
      ]
      output.link = [
        { rel: "icon", href: "/static/favicon.ico" },
        { rel: "icon", sizes: "152x152", href: "/static/favicon.ico" },
        ...output.link
      ]
      return output;
    }

    render(){
      return (
        <div className="app">
          <Helmet {...this.getMetaData()} />
          <WrappedComponent {...this.props} />
          <style jsx global>{styles}</style>
        </div>
      )
    }
  }

  return withRouter(enhancedComponent)
}