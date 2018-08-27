import React, {Component} from 'react'
import Anime from 'react-anime'
import styles from '../styles/animation';
import {primary, secondary, tertiary} from '../../../hocs/Page/styles/colors';

export default class Animation extends Component {
  shouldComponentUpdate(nextProps, nextState){
    // Prevent Anime from rerendering animation
    return false;
  }
  render(){
    return (
      <span>
        <svg version="1.1" 
          xmlns="http://www.w3.org/2000/svg"  
          x="0px" 
          y="0px" 
          width="600px"
          height="500px"
          viewBox="0 0 600.99 80.91"
        >

          <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stopColor={secondary.light} />
              <stop offset="25%" stopColor={secondary.neutral} />
              <stop offset="25%" stopColor={secondary.dark} />
              <stop offset="25%" stopColor={secondary.neutral} />
              <stop offset="20%" stopColor={secondary.light} />
            </linearGradient>
          </defs>

          <Anime easing="easeInOutSine"
            duration={2000}
            direction="normal"
            complete={a => {
              if(a.direction == 'reverse') {
                a.direction = "normal"
              }else{
                a.direction = "reverse"
              }
              a.restart()
              this.props.onComplete()
            }}
            delay={(el, index) => index * 400}
            strokeDashoffset={ (el) => {
              var pathLength = 0;
              if (el.getTotalLength) {
                pathLength = el.getTotalLength();
                el.setAttribute('stroke-dasharray', pathLength);
              }
              return [pathLength, 0];
              }}
            >
            <path d="M323.36,212.07h23.35q9.35,0,16,8.45t6.56,20.27q0,12.53-6.56,21.37t-16,8.84H323.36Zm23.35,55.15q7.67,0,13.12-7.75t5.47-18.68q0-10.33-5.47-17.59t-13.12-7.26H327.34v51.28Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M373.15,271l23.35-58.93h5L424.53,271H420l-7.56-18.88H385.17L377.62,271Zm37.76-22.66-12.12-31.7-12.42,31.7Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M431.68,271V212.07h5.47l35.58,54.06V212.07h4V271h-5.47l-35.57-53.27V271Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M489.42,271V212.07h4V271Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M506.12,271V212.07h38.45v3.87H510.09V238.6h31.5v3.68h-31.5v24.94h34.48V271Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M552,212.07h4v55.15h31.7V271H552Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M625.47,267.62q-4.28-4.37-4.28-11.73v-2.18h4v2.18q0,5.87,3.18,9.35a10.75,10.75,0,0,0,8.45,3.57,11.61,11.61,0,0,0,8.84-3.57q3.29-3.48,3.28-9.35V212.07h4v43.82q0,7.37-4.38,11.73t-11.72,4.47Q629.74,272.09,625.47,267.62Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M669,263.45q-7.15-8.25-7.15-21.87,0-14.1,7.15-22.56t19.09-8.44q11.92,0,19.08,8.44t7.15,22.56q0,13.62-7.15,21.87t-19.08,8.25Q676.14,271.7,669,263.45Zm35.28-2.69q6.06-7.15,6.07-19.18,0-12.32-6.07-19.77t-16.19-7.46q-10.14,0-16.2,7.46t-6.07,19.77q0,12,6.07,19.18t16.2,7.26Q698.21,268,704.27,260.76Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M723.85,212.07H747.2q9.34,0,16,8.45t6.56,20.27q0,12.53-6.56,21.37t-16,8.84H723.85Zm23.35,55.15q7.66,0,13.12-7.75t5.47-18.68q0-10.33-5.47-17.59t-13.12-7.26H727.83v51.28Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M779.1,271V212.07h38.46v3.87H783.08V238.6h31.5v3.68h-31.5v24.94h34.48V271Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M829.59,263.45a32,32,0,0,1-8-21.87,32.35,32.35,0,0,1,8-22q7.85-9,19.08-9,9.24,0,15.6,5a20.47,20.47,0,0,1,7.85,13.11h-4a15.88,15.88,0,0,0-6.66-10.23,20.86,20.86,0,0,0-12.82-4.08q-9.54,0-16.3,8a30.87,30.87,0,0,0,0,38.56q6.76,8,16.3,7.95,8.15,0,13.41-4.77a18.48,18.48,0,0,0,6.07-12.72h4q-.79,9.65-7.25,15.41t-16.2,5.76Q837.44,272.49,829.59,263.45Z" transform="translate(-323.36 -210.58)" className="path"/>
            <path d="M880.37,271V212.07h4V271Z" transform="translate(-323.36 -210.58)" className="path"/>
          </Anime>
        </svg>

        <style jsx>{styles}</style>
      </span>
    )
  }
}

Animation.defaultProps = {
  onComplete: () => null
}