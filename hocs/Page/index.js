import React, { PureComponent } from 'react'
import Head from 'next/head'
import shortid from 'shortid'
import styles from './styles/main'

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
      let output = [];
      if(metaData instanceof Function) {
        metaData = metaData(this.props);
      }
      if(!metaData instanceof Object) return console.warn('Metadata is not instance of Object.');
      if(metaData.title) {
        output.push(<title key={shortid.generate()}>{metaData.title}</title>);
      }
      if(metaData.link && metaData.link.length){
        metaData.link.map(l => {
          output.push(<link key={shortid.generate()} {...l}></link>)
        })
      }
      if(metaData.meta && metaData.meta.length){
        metaData.meta.map(m => {
          output.push(<meta key={shortid.generate()}></meta>)
        })
      }
      return output;
    }

    render(){
      return (
        <div className="app">
          <Head>
            <title>DANIEL JODECI</title>
            <meta charset='utf-8' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:site_name" content="DANIEL JODECI" />
            <meta property="og:title" content="DANIEL JODECI - Artist / Developer / Engineer" />
            <meta property="og:description" content="Portfolio Site" />
            <meta property="og:type" content="image/png" />
            <meta property="og:image" content="/static/cover.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="640" />
            <meta property="og:image:height" content="640" />
            <meta property="og:image:type" content="" />
            <link rel="icon" href="/static/favicon.ico" />
            <link rel="icon" sizes="152x152" href="/static/favicon.ico" />
            {this.getMetaData()}
          </Head>
          <WrappedComponent {...this.props} />
          <style jsx global>{styles}</style>
        </div>
      )
    }
  }

  return enhancedComponent
}