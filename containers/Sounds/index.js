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

// CSS
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';
import styles from './styles/sounds'

export default class Sounds extends Component {

  renderSoundsImg = () => {
    return (
      <Parallax className="half-width float-left" speed={1}>
        <img className="blendo" src="/static/images/pascual_fuentes.jpg" />
        <style jsx>{styles}</style>
      </Parallax>
    )
  }

  render(){
    return (
      <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave}>
        <section id="sounds">
          <div className="section-container">

            {/* More wiggle worms */}
            <WiggleWorm size={40} right={50} top={250} color={secondary.light} speed={2} />
            <WiggleWorm size={50} top={850} left={450} color={primary.light} speed={2} />
            <WiggleWorm size={60} left={50} top={550} color={secondary.neutral} speed={-2} />
            <WiggleWorm size={350} left={190} top={200} color={tertiary.dark} speed={-1} animate />

            <div className="section-row">
              <Element name="sounds" />
              
              {/* Title */}
              <div className="title">
                <h3>Sou_<br/>nds<strong>:</strong></h3>
              </div>

              {/* Backgounr works image */}
              {this.renderSoundsImg()}

              {/* Sounds intro... */}
              <Intro />

              {/* BudSpot */}
              <Vault />

            </div>

            <div className="section-row">
              {/* Robopiano */}
              <BennysManual />

              {/* HPISO16 */}
              <Bombses />

              {/* HPISO16 */}
              <DisciplesOfSaturn />

            </div>


          </div>
          <style jsx>{styles}</style>
        </section>
      </Waypoint>
    )
  }
}

Sounds.defaultProps ={
  onEnter: () => null,
  onLeave: () => null
}