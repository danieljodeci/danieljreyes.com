import React, {Component} from 'react'
import styles from '../styles/background'
import {primary} from '../../../hocs/Page/styles/colors'
import Anime from 'react-anime';

const START = 76
const SPACING = 6
const GROUP = 60
const TOTAL = Math.round(300 / GROUP)
const DIFF = START - (START - ((GROUP - 1) * SPACING)) + 4

export default class Background extends Component {
  render(){
    return (
      <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1287.99 1544.62">
          <defs>
            <linearGradient id="grad">
              <stop offset="5%" stopColor={primary.dark} />
              <stop offset="95%" stopColor={primary.dark} />
            </linearGradient>
          </defs>

          {Array.apply(null, Array(TOTAL)).map((a, i) => {
            return (
              <Anime key={i}
                easing="easeInOutCirc"
                duration={500}
                direction="normal"
                translateY="2px"
                autoplay
                loop
                delay={(el, index) => index * 100}
              >
                {Array.apply(null, Array(GROUP)).map((a, j) => {
                  let offset = (START - (j * SPACING)) - (DIFF * i);
                  if(offset < 0) {
                    offset = `,${Math.abs(offset)}`
                  }else{
                    offset = `-${offset}`
                  }
                  return (
                    <path key={j} className="path" d={`M-7.5${offset}.5c22.32-8.26,57.74-18.4,101-17,56.94,1.84,73.83,21.92,125,28,72.67,8.63,79.35-27,163-31,89.85-4.25,99.48,36.08,187,31,80.49-4.67,79.61-39.2,153-44,106.88-7,122.3,65.38,227,62,102-3.29,139.67-73.7,201-44,29.29,14.19,56.63,47.65,104,45a100.34,100.34,0,0,0,26-5`} transform="translate(8.02 111.48)"/>
                  )
                })}
              </Anime>
            )
          })}
        </svg>
        <style jsx>{styles}</style>
      </div>
    )
  }
}