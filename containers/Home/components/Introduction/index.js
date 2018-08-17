import React, {Component} from 'react'
import styles from '../../styles/introduction'
import ReactTextTransition from 'react-text-transition';
import WiggleWorm from './WiggleWorm';
import Waypoint from 'react-waypoint'
import { primary, secondary, tertiary, red } from '../../../../hocs/Page/styles/colors';

const TEXTS = ["Daniel.", "Daníel.", "D-rey.", "D.", "Jodeci."]

export default class Introduction extends Component {
  state = {
    index: 0
  }

  componentDidMount(){
    this.insertStrongTag();
    this.interval = setInterval(() => 
      this.setState({index: (this.state.index + 1) % TEXTS.length}, () => {
        setTimeout(this.insertStrongTag, 100)
      }), 2000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  insertStrongTag = () => {
    if(!document.getElementById('text-animation')) return;
    const nodes = document.getElementById('text-animation').getElementsByClassName('text');
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const text = n.innerHTML;
      const name = text.substring(0, text.length-1)
      if(name.includes('.')) continue;
      n.innerHTML = `${name}<strong>.</strong>`
    }
  }

  render(){
    return (
      <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave}>
        <section id="intro" className="full-height">
          <div className="container">
            <h1>Hi<strong>,</strong></h1>
            <h3>I go by</h3>
            <h2 id="text-animation">
              <ReactTextTransition
                text={TEXTS[this.state.index]}
                spring={{ stiffness: 50, damping: 20 }}
              />
            </h2>
          </div>


          {/* Background text */}
          <h1>CRE<br />ATE</h1>

          <div className="description">
    
            <svg className="knockout-text-container" width="100%" height="100%" transform="rotate(-90)">
              
              <rect className="knockout-text-bg" width="100%" height="100%" x="0" y="0" fillOpacity="1" mask="url(#knockout-text)" />
              
              <mask id="knockout-text">
                <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                <text x="20px" y="45px" fill="#000" textAnchor="left">I am an Artist,</text> 
                <text x="20px" y="85px" fill="#000" textAnchor="left">Full-Stack Developer, </text>
                <text x="20px" y="125px" fill="#000" textAnchor="left">and maker of things </text>
                <text x="20px" y="165px" fill="#000" textAnchor="left">who is based in Los Angeles.</text>
              </mask>
              
            </svg>
            
          </div>

          <WiggleWorm size={140} left={250} top={200} color={tertiary.dark} speed={10} />
          <WiggleWorm size={180} left={200} top={550} color={secondary.light} speed={8} />
          <WiggleWorm size={200} left={500} top={800} color={primary.light} speed={5} />
          <WiggleWorm size={190} left={1050} top={300} color={secondary.light} speed={9} />

          <style jsx>{styles}</style>
        </section>
      </Waypoint>
    )
  }
}

Introduction.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}