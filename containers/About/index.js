import React, {Component} from 'react'

// Components
import Waypoint from 'react-waypoint'
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';
import { Element } from 'react-scroll';
import Skills from './components/Skills'
import Slide from 'react-reveal/Slide';

// CSS
import styles from './styles/about'
import { secondary } from '../../hocs/Page/styles/colors';
import cn from 'classnames'

export default class About extends Component {
  render(){
    const { mobile, tablet } = this.props
    return (
      <section id="about">

        {/* Skills */}
        {!mobile && !tablet && <Skills mobile={mobile} tablet={tablet} />}
        
        {/* About Paragram */}
        <div className="section-container">
          {/* More wiggle worms */}
          <WiggleWorm mobile={mobile} tablet={tablet} size={60} left={350} top={350} color={secondary.light} speed={-2} />
          <WiggleWorm mobile={mobile} tablet={tablet} size={80} top={50} right={350} color={secondary.neutral} speed={2} />

          {/* Bio */}
          <div className={cn('section-row', {['float-left']: mobile})}>
            <Element name="about" />

            <Slide left={mobile || tablet} cascade>
              <div className="bio">
                <h2>Ab_<br />out<strong>:</strong></h2>
                <p>I am an artist, software developer, entrepeneur, and musician residing in Los Angeles, CA. I am a graduate of CalArts and a founder of BudSpot. I spend my days dwelling upon how I can create things that will contribute to tomorrow's complacency. I have an obsession with playing synthesizers and building kinetic sound sculptures.</p>
              </div>
            </Slide>
            <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave} />

            {/* Skills */}
            {mobile || tablet && <Skills mobile={mobile} tablet={tablet}/>}
          </div>

        </div>
        <style jsx>{styles}</style>
      </section>
    )
  }
}

About.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}