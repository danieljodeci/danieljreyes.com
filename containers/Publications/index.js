import React, {Component} from 'react'

// Components
import Waypoint from 'react-waypoint'
import Parallax from 'react-rellax';
import WiggleWorm from '../Home/components/Introduction/WiggleWorm';

// CSS
import { tertiary, primary, secondary } from '../../hocs/Page/styles/colors';
import styles from './styles/publications'

export default class Publications extends Component {
  render(){
    return (
      <Waypoint onEnter={this.props.onEnter} onLeave={this.props.onLeave}>
        <section id="publications">
          <div className="section-container">

            {/* A little more wiggles */}
            <WiggleWorm size={40} right={200} top={0} color={secondary.light} speed={2} />
            <WiggleWorm size={50} top={550} left={275} color={primary.light} speed={3} />

            <div className="section-row">
              <div className="full-width">
                <div className="half-width float-left">
                  <h2>Public_<br/>ations<strong>:</strong></h2>
                </div>
                <div className="half-width float-left">
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
              </div>
            </div>

          </div>
          <style jsx>{styles}</style>
        </section>
      </Waypoint>
    )
  }
}