import React, {Component} from 'react'
import styles from '../styles/introduction'

export default class Introduction extends Component {
  render(){
    return (
      <div className="full-height">
        <div className="container">
          <h1>Hi<strong>,</strong></h1>
          <h3>I go by</h3>
          <h2>Daniel<strong>.</strong></h2>
        </div>

        <div className="description">
          <p>I am an <br/>Artist, <br/>Full-Stack Developer, <br/>and maker of things <br/>who is based in Los Angeles</p>
        </div>

        <style jsx>{styles}</style>
      </div>
    )
  }
}