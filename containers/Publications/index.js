import React, {Component} from 'react'

// Components
import Waypoint from 'react-waypoint'
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';
import { Element } from 'react-scroll';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

// CSS
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';
import styles from './styles/publications'
import cn from 'classnames'

export default class Publications extends Component {
  render(){
    const { mobile } = this.props
    return (
      <section id="publications">
        <div className="section-container">

          {/* A little more wiggles */}
          <WiggleWorm mobile={mobile} size={40} right={200} top={0} color={secondary.light} speed={2} />
          <WiggleWorm mobile={mobile} size={50} top={550} left={275} color={primary.light} speed={3} />

          <div className="section-row">
            <div className="full-width">
              <Element name="publications" />
              
              <Slide left={mobile}>
                <div className={cn('half-width', {['float-left']: !mobile})}>
                  <h2>Public_<br/>ations<strong>:</strong></h2>
                </div>
              </Slide>

              <Fade>
                <div className={cn('half-width', {['float-left']: !mobile})}>
                  <p>I have written a paper which describes my inspiration and motivation behind some of my projects.</p>
                  <ul>
                    <li>International Conference on Live Interfaces<br/>
                      <span>
                        <a href="http://users.sussex.ac.uk/~thm21/ICLI_proceedings/2016/Papers/Long_Papers/43_Reyes_Kapur_ICLI_Revision_2.pdf" target="_blank">
                          Designing Mechatronic Sound Systems Inspired by Sinusoidal Mathematics
                        </a>
                      </span></li>
                  </ul>
                </div>
              </Fade>

            </div>
          </div>

          <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave} />

        </div>
        <style jsx>{styles}</style>
      </section>
    )
  }
}