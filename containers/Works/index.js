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
    const { mobile } = this.props
    return (
      <Parallax className={cn('half-width', {['float-left']: !mobile})} speed={mobile ? 0 : 4}>
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
    const { mobile } = this.props
    return (
      <section id="works">
        <div className="section-container">

          {/* More wiggle worms */}
          <WiggleWorm mobile={mobile} size={40} right={50} top={250} color={secondary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={50} top={850} left={450} color={primary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={60} left={50} top={550} color={mobile ? tertiary.dark : secondary.neutral} speed={-2} />

          <div className={cn('section-row', {['display-block']: mobile})}>
            <Element name="works" />
            {/* Title */}
            <Slide left={mobile}>
              <div className="title">
                <h3>Selected_<br /> works<strong>:</strong></h3>
              </div>
            </Slide>

            {/* Backgounr works image */}
            {this.renderWorksImg()}

            {/* Works intro... */}
            <Lazyload height={500}>
              <Fade>
                <Intro  {...this.props} />
              </Fade>
            </Lazyload>

            <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave} />

            {/* BudSpot */}
            <Lazyload height={500}>
              <Fade>
                <BudSpot {...this.props} />
              </Fade>
            </Lazyload>

          </div>


          <div className={cn('section-row', {['display-block']: mobile})}>
            {/* Robopiano */}
            <Lazyload height={500}>
              <Fade>
                <Robopiano {...this.props} />
              </Fade>
            </Lazyload>

            {/* HPISO16 */}
            <Lazyload height={500}>
              <Fade>
                <HPISO16 {...this.props} />
              </Fade>
            </Lazyload>

            {/* HPISO16 */}
            <Lazyload height={500}>
              <Fade>
                <FoldableCase {...this.props} />
              </Fade>
            </Lazyload>

            {/* Resonant Spectra */}
            <Lazyload height={500}>
              <Fade>
                <ResonantSpectra {...this.props} />
              </Fade>
            </Lazyload>

            {/* Artifacts */}
            <Lazyload height={500}>
              <Fade>
                <Artifacts {...this.props} />
              </Fade>
            </Lazyload>

            {/* Post-Wave */}
            <Lazyload height={500}>
              <Fade>
                <PostWave {...this.props} />
              </Fade>
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