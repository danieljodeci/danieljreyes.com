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
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Lazyload from 'react-lazyload';

// CSS
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';
import styles from './styles/works'
import cn from 'classnames'

export default class Works extends Component {

  renderWorksImg = () => {
    const { mobile, tablet } = this.props
    return (
      <Parallax className={cn('half-width', {['float-left']: !mobile && !tablet})} speed={mobile || tablet ? 0 : 4}>
        <Lazyload height={300}>
          <Fade>
            <div>
              <img className="blendo" src="/static/images/blendo.jpg" />
              <style jsx>{styles}</style>
            </div>
          </Fade>
        </Lazyload>
      </Parallax>
    )
  }

  render(){
    const { mobile, tablet } = this.props
    return (
      <section id="works">
        <div className="section-container">

          {/* More wiggle worms */}
          <WiggleWorm mobile={mobile} tablet={tablet} size={40} right={50} top={250} color={secondary.light} speed={2} />
          <WiggleWorm mobile={mobile} tablet={tablet} size={50} top={850} left={450} color={primary.light} speed={2} />
          <WiggleWorm mobile={mobile} tablet={tablet} size={60} left={50} top={550} color={mobile || tablet ? tertiary.dark : secondary.neutral} speed={-2} />

          <div className={cn('section-row', {['display-block']: mobile || tablet})}>
            <Element name="works" />
            {/* Title */}
            <Slide left={mobile || tablet}>
              <div className="title">
                <h3>Selected_<br /> works<strong>:</strong></h3>
              </div>
            </Slide>

            {/* Backgounr works image */}
            {this.renderWorksImg()}

            {/* Works intro... */}
            <Lazyload height={500}>
              <Intro  {...this.props} />
            </Lazyload>

            <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave} />

            {/* BudSpot */}
            <Lazyload height={500}>
              <BudSpot {...this.props} />
            </Lazyload>

          </div>


          <div className={cn('section-row', {['display-block']: mobile || tablet})}>
            {/* Robopiano */}
            <Lazyload height={500}>
              <Robopiano {...this.props} />
            </Lazyload>

            {/* HPISO16 */}
            <Lazyload height={500}>
              <HPISO16 {...this.props} />
            </Lazyload>

            {/* HPISO16 */}
            <Lazyload height={500}>
              <FoldableCase {...this.props} />
            </Lazyload>

            {/* Resonant Spectra */}
            <Lazyload height={500}>
              <ResonantSpectra {...this.props} />
            </Lazyload>

            {/* Artifacts */}
            <Lazyload height={500}>
              <Artifacts {...this.props} />
            </Lazyload>

            {/* Post-Wave */}
            <Lazyload height={500}>
              <PostWave {...this.props} />
            </Lazyload>

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