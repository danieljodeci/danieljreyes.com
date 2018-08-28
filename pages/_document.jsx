
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
      title='DANIEL JODECI'
      meta={[
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
      ]}
      link={[
        { rel: "icon", href: "/static/favicon.ico" },
        { rel: "icon", sizes: "152x152", href: "/static/favicon.ico" }
      ]}
    />)
  }

  render () {
    return (<html {...this.helmetHtmlAttrComponents}>
      <Head>
        { this.helmetJsx }
        { this.helmetHeadComponents }
      </Head>
      <body {...this.helmetBodyAttrComponents}>
        <Main />
        <NextScript />
      </body>
    </html>)
  }
}