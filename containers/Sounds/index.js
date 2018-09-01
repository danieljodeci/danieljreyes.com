import React, {Component} from 'react'

// Components
import Intro from './components/Intro';
import Vault from './components/Vault';
import BennysManual from './components/BennysManual';
import Bombses from './components/Bombses';
import DisciplesOfSaturn from './components/DisciplesOfSaturn';
import { Element } from 'react-scroll';
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';
import Waypoint from 'react-waypoint'
import Parallax from 'react-rellax';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

// CSS
import { tertiary, primary, secondary, white } from '../../hocs/Page/styles/colors';
import styles from './styles/sounds'
import cn from 'classnames'

export default class Sounds extends Component {

  renderSoundsImg = () => {
    const { mobile } = this.props
    return (
      <Parallax className={cn('half-width', {['float-left']: !mobile})} speed={mobile ? 0 : 1}>
        <Fade>
          <div>
            <img className="blendo" src="/static/images/pascual_fuentes.jpg" />
            <style jsx>{styles}</style>
          </div>
        </Fade>
      </Parallax>
    )
  }

  render(){
    const { mobile } = this.props
    return (
      <section id="sounds">
        <div className="section-container">

          {/* More wiggle worms */}
          <WiggleWorm mobile={mobile} size={40} right={mobile ? 80 : 50} top={250} color={secondary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={50} top={850} left={450} color={primary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={60} left={50} top={550} color={mobile ? primary.light : secondary.neutral} speed={-2} />
          <WiggleWorm mobile={mobile} size={350} left={190} top={mobile ? -150 : 200} color={mobile ? secondary.light : secondary.neutral} speed={-1} animate />

          <div className={cn('section-row', {['display-block']: mobile})}>
            <Element name="sounds" />
            
            {/* Title */}
            <Slide left={mobile}>
              <div className="title">
                <h3>Sou_<br/>nds<strong>:</strong></h3>
              </div>
            </Slide>

            {/* Backgounr works image */}
            {this.renderSoundsImg()}

            {/* Sounds intro... */}
            <Fade>
              <Intro {...this.props} />
            </Fade>


            <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave} />

            {/* BudSpot */}
            <Vault {...this.props} />
            

          </div>

          <div className={cn('section-row', {['display-block']: mobile})}>

            {/* Robopiano */}
            <BennysManual {...this.props} />
            

            {/* HPISO16 */}
            <Bombses {...this.props} />
            

            {/* HPISO16 */}
            <DisciplesOfSaturn {...this.props} />
            

          </div>

        </div>
        <style jsx>{styles}</style>
      </section>
    )
  }
}

Sounds.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}