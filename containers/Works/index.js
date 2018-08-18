import React, {Component} from 'react'
import Waypoint from 'react-waypoint'
import styles, {globalStyles} from './styles/works'
import Parallax from 'react-rellax';
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';

export default class Works extends Component {

  renderWorksImg = () => {
    return (
      <Parallax speed={4}>
        <div className="half-width">
          <img src="/static/images/post-wave.jpg" />
          <style jsx>{styles}</style>
        </div>
      </Parallax>
    )
  }

  renderWorksIntro = () => {
    return (
      <Parallax speed={7}>
        <div className="works-intro">
          
          <p>I started my exploration into technology as a musician, attempting to recreate physical phenomena found in sound into experiential environments. With this curiousity, came the need to learn a multitude of tech stacks in order to execute the final product. Familiarizing myself with multiple languages over time increased my ability to adapt and pick up a new technology as efficiently as possible. Here you can view some of the selected works that helped me develop these skills.</p>
          <style jsx>{styles}</style>

        </div>
      </Parallax>
    )
  }

  render(){
    return (
      <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave}>
        <section id="works">
          <div className="section-container">

            {/* More wiggle worms */}
            <WiggleWorm size={40} right={50} top={250} color={secondary.light} speed={2} />
            <WiggleWorm size={50} top={850} left={450} color={primary.light} speed={2} />
            <WiggleWorm size={60} left={50} top={550} color={secondary.neutral} speed={-2} />

            <div className="section-row">

              {/* Title */}
              <div className="title">
                <h3>Selected_<br /> works<strong>:</strong></h3>
              </div>

              {/* Backgounr works image */}
              {this.renderWorksImg()}

              {/* Works intro... */}
              {this.renderWorksIntro()}

            </div>

          </div>
          <style jsx>{styles}</style>
        </section>
      </Waypoint>
    )
  }
}

Works.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}