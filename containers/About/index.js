import React, {Component} from 'react'
import Waypoint from 'react-waypoint'
import styles, {globalStyles} from './styles/about'
import Parallax from 'react-rellax';
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';

export default class About extends Component {
  render(){
    return (
      <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave}>
        <section id="about">

          {/* Skills */}
          <Parallax className="skills" speed={5}>
            <h4>Skills</h4>
            <ul>
              <li><span>Front-End Dev</span></li>
              <li><span>Back-End Dev</span></li>
              <li><span>CAD Design</span></li>
              <li><span>Hardware Programming</span></li>
              <li><span>Music Composition</span></li>
            </ul>
          </Parallax>
          
          {/* About Paragram */}
          <div className="section-container">
            {/* More wiggle worms */}
            <WiggleWorm size={60} left={350} top={350} color={secondary.light} speed={-2} />
            <WiggleWorm size={80} top={50} right={350} color={primary.light} speed={2} />

            {/* Bio */}
            <div className="section-row">
              <div className="bio">
                <h2>Ab_<br />out<strong>:</strong></h2>
                <p>I am an artist, software developer, entrepeneur, and musician residing in Los Angeles, CA. I am a graduate of CalArts and a founder of BudSpot. I spend my days dwelling upon how I can create things that will make tomorrow feel a bit more comfortable. I love synthesizers and kinetic sound sculptures.</p>
              </div>
            </div>

          </div>
          <style jsx>{styles}</style>
        </section>
      </Waypoint>
    )
  }
}

About.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}