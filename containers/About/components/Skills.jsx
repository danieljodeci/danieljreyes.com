import React, {Component} from 'react'

// Components
import {IoMdArrowDropright, IoMdArrowDropdown} from 'react-icons/io'
import Parallax from 'react-rellax';
import Slide from 'react-reveal/Slide';

// CSS
import styles from '../styles/about'
import { tertiary, primary, secondary } from '../../../hocs/Page/styles/colors';

export default class Skills extends Component {
  state = {
    frontEndDev: false,
    backEndDev: false,
    digiFab: false,
    circuitDesign: false,
    hardwareProgramming: false,
    musicProduction: false
  }

  onToggleDropDown = (item) => {
    let newState = {}
    for(let k in this.state){
      if(k == item) continue;
      newState[k] = false;
    }
    newState[item] = !this.state[item];
    this.setState(newState)
  }
  
  render(){
    const {
      frontEndDev,
      backEndDev,
      digiFab,
      circuitDesign,
      hardwareProgramming,
      musicProduction
    } = this.state;
    const {mobile, tablet} = this.props
    return (
      <Parallax className="skills" speed={mobile || tablet ? 0 : 5}>
        <Slide left={mobile || tablet} cascade>
          <h4>Skills</h4>
        </Slide>

        <Slide left={mobile || tablet} cascade>
          <ul>
            <li onClick={() => this.onToggleDropDown('frontEndDev')}>
              <div className="flex-row align-center">
                {frontEndDev ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
                <span>Front-End Dev</span>
              </div>
              {frontEndDev && (
                <ul>
                  <li><span>Javascript</span></li>
                  <li><span>CSS</span></li>
                  <li><span>Sass</span></li>
                  <li><span>React</span></li>
                  <li><span>Redux</span></li>
                  <li><span>Redux-saga</span></li>
                  <li><span>HLS.js</span></li>
                  <li><span>JW Player</span></li>
                  <li><span>Webpack</span></li>
                  <li><span>Workbox</span></li>
                  <li><span>Service Workers</span></li>
                  <li><span>Socket.io</span></li>
                  <li><span>Apollo</span></li>
                </ul>
              )}
            </li>
            <li onClick={() => this.onToggleDropDown('backEndDev')}>
              <div>
                {backEndDev ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
                <span>Back-End Dev</span>
              </div>
              {backEndDev && (
                <ul>
                  <li><span>Node.js</span></li>
                  <li><span>Express</span></li>
                  <li><span>MongoDB</span></li>
                  <li><span>Mongoose</span></li>
                  <li><span>JWT</span></li>
                  <li><span>Socket.io</span></li>
                  <li><span>Google Cloud Console</span></li>
                  <li><span>AWS</span></li>
                  <li><span>GraphQL</span></li>
                  <li><span>SQL</span></li>
                </ul>
              )}
            </li>
            <li onClick={() => this.onToggleDropDown('digiFab')}>
              <div>
                {digiFab ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
                <span>Digital Fabrication</span>
              </div>
              {digiFab && (
                <ul>
                  <li><span>Solidworks</span></li>
                  <li><span>Fusion 360</span></li>
                  <li><span>MakerCAD</span></li>
                  <li><span>AutoCAD</span></li>
                  <li><span>Cura</span></li>
                  <li><span>3D Printing</span></li>
                  <li><span>CNC Machining</span></li>
                  <li><span>Laser Cutting</span></li>
                </ul>
              )}
            </li>
            <li onClick={() => this.onToggleDropDown('circuitDesign')}>
              <div>
                {circuitDesign ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
                <span>Circuit Design</span>
              </div>
              {circuitDesign && (
                <ul>
                  <li><span>Altium</span></li>
                  <li><span>SPICE</span></li>
                  <li><span>Falstad</span></li>
                  <li><span>Eagle</span></li>
                  <li><span>KiCAD</span></li>
                </ul>
              )}
            </li>
            <li onClick={() => this.onToggleDropDown('hardwareProgramming')}>
              <div>
                {hardwareProgramming ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
                <span>Hardware Programming</span>
              </div>
              {hardwareProgramming && (
                <ul>
                  <li><span>Arduino</span></li>
                  <li><span>STM</span></li>
                  <li><span>Raspberry Pi</span></li>
                  <li><span>Python</span></li>
                  <li><span>IOT</span></li>
                  <li><span>C++</span></li>
                  <li><span>C</span></li>
                </ul>
              )}
            </li>
            <li onClick={() => this.onToggleDropDown('musicProduction')}>
              <div>
                {musicProduction ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
                <span>Music Production</span>
              </div>
              {musicProduction && (
                <ul>
                  <li><span>Pro Tools</span></li>
                  <li><span>Ableton</span></li>
                  <li><span>Logic Pro</span></li>
                  <li><span>Reaktor</span></li>
                  <li><span>Max/MSP</span></li>
                </ul>
              )}
            </li>
          </ul>
        </Slide>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}