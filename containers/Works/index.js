import React, {Component} from 'react'

// Components
import Intro from './components/Intro';
import BudSpot from './components/BudSpot';
import Robopiano from './components/Robopiano';
import HPISO16 from './components/HPISO16';
import FoldableCase from './components/FoldableCase';
import ResonantSpectra from './components/ResonantSpectra';
import Artifacts from './components/Artifacts';
import PostWave from './components/PostWave';
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';
import Waypoint from 'react-waypoint'
import Parallax from 'react-rellax';
import { Element } from 'react-scroll';

// CSS
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';
import styles from './styles/works'

export default class Works extends Component {

  renderWorksImg = () => {
    const { mobile } = this.props
    return (
      <Parallax className="half-width float-left" speed={mobile ? 0 : 4}>
        <img className="blendo" src="/static/images/blendo.jpg" />
        <style jsx>{styles}</style>
      </Parallax>
    )
  }

  render(){
    const { mobile } = this.props
    return (
      <section id="works">
        <div className="section-container">

          {/* More wiggle worms */}
          <WiggleWorm mobile={mobile} size={40} right={50} top={250} color={secondary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={50} top={850} left={450} color={primary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={60} left={50} top={550} color={secondary.neutral} speed={-2} />

          <div className="section-row">
            <Element name="works" />
            {/* Title */}
            <div className="title">
              <h3>Selected_<br /> works<strong>:</strong></h3>
            </div>

            {/* Backgounr works image */}
            {this.renderWorksImg()}

            {/* Works intro... */}
            <Intro  {...this.props} />

            <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave} />

            {/* BudSpot */}
            <BudSpot {...this.props} />

          </div>


          <div className="section-row">
            {/* Robopiano */}
            <Robopiano {...this.props} />

            {/* HPISO16 */}
            <HPISO16 {...this.props} />

            {/* HPISO16 */}
            <FoldableCase {...this.props} />

            {/* Resonant Spectra */}
            <ResonantSpectra {...this.props} />

            {/* Artifacts */}
            <Artifacts {...this.props} />

            {/* Post-Wave */}
            <PostWave {...this.props} />

          </div>


        </div>
        <style jsx>{styles}</style>
      </section>
    )
  }
}

Works.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}