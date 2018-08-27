import React, {Component} from 'react'

// Components
import ReactTextTransition from 'react-text-transition';
import WiggleWorm from './WiggleWorm';
import Waypoint from 'react-waypoint'
import { Element } from 'react-scroll'

// CSS
import styles from '../../styles/introduction'
import { primary, secondary, tertiary, white } from '../../../../hocs/Page/styles/colors';


// Constants
const NAMES = ["Daniel.", "Daníel.", "D-rey.", "D.", "Jodeci."]

export default class Introduction extends Component {
  state = {
    index: 0
  }

  componentDidMount(){
    this.insertStrongTag();
    this.interval = setInterval(() => 
      this.setState({index: (this.state.index + 1) % NAMES.length}, () => {
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
        <section id="intro">
          <div className="section-container" style={{marginTop: 65}}>
            <div className="section-row">
              <Element name="intro" />
              {/* Text Animation */}
              <div className="welcome-animation">
                <h1>Hi<strong>,</strong></h1>
                <h3>I go by</h3>
                <h2 id="text-animation">
                  <ReactTextTransition
                    text={NAMES[this.state.index]}
                    spring={{ stiffness: 50, damping: 20 }}
                  />
                </h2>
              </div>  


              {/* Background text */}
              <div className="background-text">
                <h4>JOD_<br />ECI</h4>
              </div>

              {/* Short Bio */}
              <div className="description">
                <svg className="knockout-text-container" width="100%" height="100%" transform="rotate(-90)">
                  <rect className="knockout-text-bg" width="100%" height="100%" x="0" y="0" fillOpacity="1" mask="url(#knockout-text)" />
                  <mask id="knockout-text">
                    <rect width="100%" height="100%" fill={white.neutral} x="0" y="0" />
                    <text x="20px" y="45px" fill="#000" textAnchor="left">I am an Artist,</text> 
                    <text x="20px" y="75px" fill="#000" textAnchor="left">Full-Stack Developer, </text>
                    <text x="20px" y="105px" fill="#000" textAnchor="left">and maker of things </text>
                    <text x="20px" y="135px" fill="#000" textAnchor="left">who is based in Los Angeles.</text>
                  </mask>
                </svg>
              </div>

              {/* Wiggle Worms */}
              <WiggleWorm size={80} left={270} top={230} color={tertiary.darker} speed={-2} animate />
              <WiggleWorm size={60} left={100} bottom={150} color={tertiary.lighter} speed={-6} />
              <WiggleWorm size={70} left={420} bottom={70} color={tertiary.light} speed={3} />
              <WiggleWorm size={60} right={150} top={100} color={secondary.light} speed={-3} />
              <WiggleWorm size={350} left={250} bottom={-300} color={white.neutral} speed={-3} animate />

            </div>
          </div>
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