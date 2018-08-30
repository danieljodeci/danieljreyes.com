import React, {Component} from 'react'
import styles from '../styles/background'
import {primary, white} from '../../../hocs/Page/styles/colors'
import Anime from 'react-anime';
import shortid from 'shortid'

export default class Background extends Component {
  shouldComponentUpdate(nextProps, nextState){
    // Prevent Anime from rerendering animation
    return false;
  }
  render(){
    const { mobile } = this.props
    // console.log({mobile})
    this.START = 200
    this.SPACING = mobile ? 16 : 6
    this.GROUP = 60
    this.TOTAL = Math.round(400 / this.GROUP)
    this.DIFF = this.START - (this.START - ((this.GROUP - 1) * this.SPACING)) + (mobile ? 16 : 6)
    return (
      <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={mobile ? "0 0 1287.99 10544.62" : "0 0 1287.99 1544.62"}>
          <defs>
            <linearGradient id="grad">
              <stop offset="5%" stopColor={white.dark} />
              <stop offset="95%" stopColor={white.dark} />
            </linearGradient>
          </defs>

          {Array.apply(null, Array(this.TOTAL)).map((a, i) => {
            {/* return (
              <Anime key={shortid.generate()}
                easing="easeInOutCirc"
                duration={500}
                direction="normal"
                translateY="1px"
                autoplay
                loop
                delay={(el, index) => index * 100}
              > */}
                return Array.apply(null, Array(this.GROUP)).map((a, j) => {
                  let offset = (this.START - (j * this.SPACING)) - (this.DIFF * i);
                  if(offset < 0) {
                    offset = `,${Math.abs(offset)}`
                  }else{
                    offset = `-${offset}`
                  }
                  return (
                    <path key={j} className="path" d={`M-7.5${offset}.5c22.32-8.26,57.74-18.4,101-17,56.94,1.84,73.83,21.92,125,28,72.67,8.63,79.35-27,163-31,89.85-4.25,99.48,36.08,187,31,80.49-4.67,79.61-39.2,153-44,106.88-7,122.3,65.38,227,62,102-3.29,139.67-73.7,201-44,29.29,14.19,56.63,47.65,104,45a100.34,100.34,0,0,0,26-5`} transform="translate(8.02 111.48)"/>
                  )
                })
              {/* </Anime>
            ) */}
          })}
        </svg>
        <style jsx>{styles}</style>
      </div>
    )
  }
}