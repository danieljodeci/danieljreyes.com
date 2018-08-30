import React, {PureComponent} from 'react'
import styles from '../../styles/introduction'
import Parallax from 'react-rellax';
import shortid from 'shortid';

const scale = (xMin, xMax, yMin, yMax, input) => {
  var percent = (input - yMin) / (yMax - yMin);
  var output = percent * (xMax - xMin) + xMin; 
  return output > xMax ? xMax : output < xMin ? xMin : output;
}

export default class WiggleWorm extends PureComponent {
  render(){
    const { top, left, bottom, right, size, color, speed, animate, mobile } = this.props
    const id = shortid.generate();
    return (
      <div className="wiggle-container" style={{top, left, bottom, right, width: size, height: size}}>
        <Parallax speed={mobile ? 0 : speed}>
          <div style={{position: 'relative'}}>
            <svg id="wiggle-worm" width="100%" height="100%" viewBox="0 0 631 631">
              <circle fillOpacity="1" cx="315" cy="315" r="315" fill={color} mask={`url(#${id})`} />
              <mask id={id}>
                <circle width="100%" height="100%" fill="#fff" fillOpacity="1" cx="315.5" cy="315.5" r="315"/>

                  <path className="wiggle-path" d="M617.27,259.52c-7.11-2.19-14,2.66-20.26,5.55-6.53,3-13.34,4.33-20.44,5.28-15.9,2.12-32.24,1.16-46.59-6.56-4.54-2.45-.49-9.35,4-6.91,14.64,7.88,32,7.57,47.89,4.56,6.9-1.3,12.48-4.16,18.82-7,6-2.7,12.17-4.61,18.67-2.61C624.31,253.32,622.2,261,617.27,259.52Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M616.31,288.79c-4.95-2.86-10.38-3.85-15.88-5.09-1.44-.32-3.37-1.18-4.84-.78s-3,2-4.46,2.72c-8.49,4.36-17.26,2.49-25.86-.45-4.85-1.66-2.76-9.38,2.13-7.71,5.09,1.73,10.66,3.77,16.1,2.53,4-.91,6.81-4.18,10.73-5,3.74-.78,8,.89,11.63,1.68a49.71,49.71,0,0,1,14.49,5.18C624.81,284.46,620.78,291.37,616.31,288.79Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M547.31,387.21c4.67-2.07,8.74,4.83,4,6.91-10.67,4.74-20.43,3.12-30.84-1.42-5.28-2.31-10.41-5-16-6.46-6.67-1.7-13.26-.54-19.81,1.15-14.63,3.78-28.88,6.16-44.07,6.08-12.48-.07-27.53.51-38.63-6-4.44-2.61-.41-9.52,4-6.9,5.83,3.42,12.48,4,19.1,4.28,6.4.28,12.77.73,19.18.61A155.26,155.26,0,0,0,467,383.55c6.47-1.07,12.66-3.31,19.05-4.73,11.35-2.52,20.87-.92,31.37,3.73C527.13,386.86,536.7,391.92,547.31,387.21Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M522.4,362.81c13.48,5.66,30.09,11.23,44.09,4.06,6.39-3.28,11.53-8.35,18.83-9.81a19.66,19.66,0,0,1,9.84.46c3.66,1.14,7,3.34,10.84,3.81,5,.63,5.1,8.63,0,8-8.5-1-14.75-7-23.44-3-6.58,3-11.76,8.06-18.85,10.17-14.52,4.33-30-.37-43.44-6C515.59,368.56,517.66,360.82,522.4,362.81Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M495.69,459.12c-27.42,12.23-54.76-6.1-82.88-4.18-14.63,1-27.57,8.64-41.51,12.38-15.3,4.1-31.34,2.41-47,2.35-5.15,0-5.15-8,0-8,15.51.06,31.44,1.86,46.55-2.54,13-3.81,25.1-10.28,38.72-11.88,13-1.53,26.2,1.19,38.82,4,14.47,3.22,29,7.32,43.23.95C496.31,450.13,500.38,457,495.69,459.12Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M499.45,469.1a40.5,40.5,0,0,1,20.79-.72c4,.88,7.94,2.15,12.06,2.41a91.38,91.38,0,0,0,12.37-.46c5.14-.36,5.1,7.64,0,8-8.31.59-15.55.41-23.65-1.54a37.23,37.23,0,0,0-22.44,1c-6.9,2.46-13.41,6-20.53,7.81-8.85,2.27-17.74.75-26.72,1.39-5.14.37-5.1-7.64,0-8,9.41-.67,18.43,1,27.6-2C485.92,474.78,492.41,471.2,499.45,469.1Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M326.88,546c-4.5-.92-8.29-3-12.48-4.81-6.24-2.69-12.69-4.9-18.76-8-6.4-3.26-12.49-5.79-19.8-5.9-6.83-.1-13.73,1.22-20.59,1.42-5.35.15-9.6,3.71-14.66,5.27-4.28,1.31-11.15,3.67-13.39,8-2.36,4.58-9.26.53-6.9-4,2-3.94,6.66-6.63,10.41-8.73a41,41,0,0,1,7.75-3c3-1,5.51-2.48,8.34-3.83,5.37-2.55,11.27-1.39,17-2,6.45-.69,12.44-1.53,18.93-.48,6.81,1.1,12.42,4.19,18.55,7.14s12.58,5.11,18.77,7.91c4.37,2,8.3,3.48,13.15,3.89,3.74.32,9.37.74,12.21-2.25,3.56-3.74,9.2,1.93,5.66,5.66C345.22,548.5,334.44,547.57,326.88,546Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M335.83,561.33c-7.12,7.16-19.77,5.54-28.81,4.26a60.14,60.14,0,0,1-16.51-4.67c-3.62-1.63-7-3.51-10.83-4.67-3.55-1.09-7.19-1.85-10.74-2.89-8.52-2.51-16.15-4.49-24.88-1.5-6.51,2.23-12.73,5-19.58,6.11a54.09,54.09,0,0,1-21.63-1.31c-7.23-1.81-13.52-5.19-20.41-7.8-4.78-1.81-2.7-9.54,2.12-7.72,13.41,5.09,26,11.8,40.83,8.54,6.37-1.39,12.18-4.32,18.39-6.17,6.6-2,13.49-1.53,20.12,0a190.57,190.57,0,0,1,20.36,5.79c6.62,2.38,12.46,6.11,19.43,7.62a72.88,72.88,0,0,0,13.25,1.58c4.19.12,10,.37,13.23-2.86C333.81,552,339.46,557.67,335.83,561.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M24.77,307.3C39.1,317,56,296.12,69.58,306.67c4.06,3.16-1.64,8.78-5.66,5.66-2.71-2.11-8.33.22-11.1,1.12-3.35,1.09-6.62,2.54-10.06,3.31-7,1.57-15.87,1.63-22-2.56C16.49,311.32,20.5,304.39,24.77,307.3Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M18.67,268.67c6.85-8.06,18.21-5,27.28-3,12.3,2.78,22.87,10.18,35.74,5.93,4.91-1.62,7,6.11,2.12,7.72-11.28,3.72-20,.43-30.68-3.31a88.76,88.76,0,0,0-15.67-3.85c-4.94-.77-9.59-2-13.13,2.13C21,278.26,15.36,272.57,18.67,268.67Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M50.42,294.58c-4-3.29,1.72-8.91,5.66-5.66,9.43,7.8,26.77,4.29,37.71,2,7.31-1.51,14.37-3,21.85-3.28,7.86-.35,15.74-.19,23.61-.18,5.16,0,5.15,8,0,8-9.07,0-18.16-.25-27.21.37-8,.55-15.65,3.07-23.58,4C75.52,301.46,61.23,303.51,50.42,294.58Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M187.4,151.81c7.72,3.11,14.6.95,22.07-1.75,7-2.52,13.9-4.9,21.42-4.77,14.77.26,28.22,8.16,43.11,7.38,5.15-.28,5.12,7.73,0,8-15.47.82-29.38-7.73-44.67-7.38s-28.37,12.56-44.06,6.23C180.55,157.62,182.62,149.88,187.4,151.81Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M159.11,147.53a111,111,0,0,1-27.1,4c-8.07.21-23.91,3.38-27.62-6.44-1.82-4.83,5.92-6.9,7.72-2.12.6,1.59,11,1,13.06.9,5.6-.22,11.29-.2,16.86-.8,15.72-1.71,31.72-11.34,47.53-4.9,4.72,1.92,2.64,9.66-2.12,7.72C178.07,142,168.42,145,159.11,147.53Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M303.7,413.29a23.08,23.08,0,0,1-15.65,3c-7.3-1-14.36-2.11-21.76-2.28a123.43,123.43,0,0,0-45.23,7.2c-4.85,1.77-6.92-6-2.12-7.71a128.06,128.06,0,0,1,43.7-7.53,120.2,120.2,0,0,1,20.59,1.41,56.19,56.19,0,0,0,9.3,1.34c3.26,0,5.6-1.51,8.38-3,13-7.05,27.55-3.56,41.45-2s27.66-.83,39.29-9.1c4.2-3,8.2,3.94,4,6.9-11,7.82-23.82,10.91-37.19,10.63C333.46,411.77,317.85,405.46,303.7,413.29Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M323,438.68c6.92,1.8,13.93,3.33,20.66,5.74a30.69,30.69,0,0,0,19.32.22c4.95-1.48,7,6.24,2.12,7.72a40.77,40.77,0,0,1-18.62,1.25c-4-.75-7.57-2.8-11.5-3.75-3.58-.87-7.13-1.35-10.66-2.46a64,64,0,0,0-21.36-3.18c-8,.26-15.66,3.54-22.95,6.67-7.12,3.07-14.09,6.46-21.79,7.78-7.86,1.35-16,2.36-23.92,3-8.14.66-15.76-.32-23.81-1.3-6.72-.82-13.53-.87-19.72-3.93-4.62-2.28-.56-9.18,4-6.9,6,3,14,2.59,20.48,3.48a94.67,94.67,0,0,0,24.37.09c7.7-.9,15.9-1.42,23.3-3.79,7.07-2.26,13.73-5.81,20.64-8.52C296.62,435.7,309.36,435.14,323,438.68Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M365.69,386.79c-9.61,5.39-20.05,5.49-30.71,4-11.14-1.5-22.31-3.65-33.61-3.17s-21.22,6.66-32.31,8.27A38.71,38.71,0,0,1,243,389.79c-4.27-2.85-.26-9.77,4-6.91a31.6,31.6,0,0,0,26.33,4c9.43-2.56,18.09-6.79,28-7.2,10.19-.43,20.52,1.12,30.56,2.69s20.46,2.71,29.72-2.48C366.15,377.36,370.18,384.27,365.69,386.79Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M375.06,209.52c-21.83,7.64-41.46-8.75-63.16-7.54-11.23.63-22.25,4.87-33.57,3.35-9-1.2-18.09-4.22-24.83-10.5-3.77-3.52,1.9-9.17,5.66-5.66,6.82,6.37,17.91,9,27,8.42,9.79-.63,19.19-3.69,29.08-3.72,19.55-.05,38.11,14.78,57.65,7.94C377.81,200.1,379.89,207.83,375.06,209.52Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M389.21,220.31c2.71-4.37,9.63-.35,6.91,4-9.55,15.43-33.53,9.49-47.12,4.07-10.93-4.36-20.56-7.44-32.49-5.81-11.42,1.56-22.33,4.48-33.91,2.58-5.07-.83-2.91-8.54,2.13-7.71,10.72,1.76,21.38-1.55,31.95-2.89a54.88,54.88,0,0,1,26.89,3.12c8.66,3.23,16.85,7.16,26.18,8C376.4,226.27,385.21,226.78,389.21,220.31Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M301.3,236.72c7.67.57,14,4.58,21.44,6,16.57,3.09,32.82-6.21,49.32-.2,4.81,1.75,2.72,9.47-2.12,7.71-15.24-5.55-30.9,2.59-46.47.65-7.16-.89-13.33-4.88-20.42-5.94-8.92-1.33-19.23.76-28,2.29-5,.88-7.19-6.83-2.12-7.71C282,237.89,292.05,236,301.3,236.72Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M278.36,258.41c7.62-1.22,15.31-2.79,23.06-2.82a51.92,51.92,0,0,1,9.64.89c4.14.76,8.06,2.6,12.27,2.85,5.13.31,5.15,8.31,0,8-8.11-.48-15.35-4-23.66-3.71s-16.31,2.11-24.41,3.32c-15.7,2.36-31,3-46.66-.42-5-1.11-2.89-8.82,2.13-7.71C246.69,262.33,262.38,261,278.36,258.41Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M290,273.21c7.43,4,16.23,5.61,24.59,6.06,9.44.51,18.44-1.83,27.66-3.46,8.6-1.52,16.25.57,24.68,1.95,10.18,1.65,20.41,3.23,30.72,3.91,5.12.33,5.14,8.33,0,8-10.4-.68-20.68-2.35-31-3.91-4.87-.74-9.7-2.12-14.6-2.58-5.1-.48-10,.78-15,1.76-17,3.36-35.36,3.61-51.12-4.82C281.43,277.69,285.48,270.78,290,273.21Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M398.72,261.48c-6.39,2.76-13.12,2.29-19.91,2.17-8.06-.14-16.08-.88-24.14-.65-5.16.14-5.14-7.86,0-8,8.67-.24,17.33.53,26,.67,3.63.05,7.46.45,11-.29,3.33-.68,6.12-2.53,9.28-3.67,6.64-2.4,13.78-.08,20.37,1.44,8.11,1.88,16.48,3.06,24.7,4.33,5.08.78,2.91,8.49-2.12,7.71-8-1.23-16.06-2.35-23.91-4.14-3.71-.84-7.45-2-11.26-2.32C404.79,258.41,402.26,260,398.72,261.48Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M375,195.33c-5.15,0-5.15-8,0-8,5.4,0,10.77.43,16.16.8,4.81.33,9.91,1.09,14.68.07,9.16-1.95,17.28-7,26.57-8.76a84.27,84.27,0,0,1,28.69-.31c9.84,1.52,19.63,3.86,29.5,1.35,5-1.27,7.12,6.44,2.13,7.71-9.58,2.44-19,1.13-28.6-.49-10.55-1.79-20.85-2.48-31.4-.19-9.41,2.05-17.85,7.55-27.41,8.85C395.43,197.7,385,195.42,375,195.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M409,170.45c-8.15,5.91-18.34,9-28,5.54-12.13-4.39-25.06-6.59-37.93-4.47-5,.84-7.19-6.87-2.12-7.71a84,84,0,0,1,34.23,1.78c5.14,1.29,10.36,4.71,15.79,4a31.72,31.72,0,0,0,14-6C409.16,160.52,413.15,167.46,409,170.45Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M403,158c-9.14,1.29-18.45,1.94-27.41-.78-4.92-1.49-2.81-9.21,2.13-7.71,8.59,2.61,17.62,1.67,26.35.29s16.31-5.75,24.86-7.63c5-1.1,7.15,6.62,2.12,7.72s-9.61,3.17-14.39,4.94A64.68,64.68,0,0,1,403,158Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M386.69,141.45c-13.22,9.07-29.29,3.09-43.31-.4-17.4-4.33-38.69-9-55.69-.6-4.61,2.27-8.66-4.63-4-6.9,15.55-7.66,34.63-6.24,51.09-2.75,8.46,1.8,16.74,4.38,25.19,6.22,7.83,1.7,15.83,2.25,22.72-2.47C386.91,131.62,390.91,138.56,386.69,141.45Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M377.73,125.86c-10.73,1.77-19.66-.64-29.59-4.54-5.81-2.29-11.48-4.49-17.84-4.14s-12.25,2.51-18.24,4c-5,1.25-7.12-6.47-2.12-7.71,11.73-2.94,22.47-6.25,34.39-2.12,10.49,3.63,19.82,8.68,31.27,6.78C380.65,117.31,382.8,125,377.73,125.86Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M337.25,99.14c-5.77-.61-11.5-1.52-17.22-2.54a140.27,140.27,0,0,0-42.7-1.27c-5.1.66-5-7.35,0-8a141.3,141.3,0,0,1,38.59.54c5.33.77,10.6,1.86,15.92,2.61,3.68.51,30.34,4.22,30.16-1.81-.15-5.16,7.85-5.14,8,0C370.42,103.08,345.85,100.05,337.25,99.14Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M306.73,105.14c4.8,1.76,2.71,9.49-2.13,7.72-15.48-5.68-33,3.32-48.37,6.47-9.92,2-28.56,5.64-32.75-7.27-1.6-4.91,6.13-7,7.71-2.12,1.39,4.28,9.48,3.43,12.83,3.19a100.31,100.31,0,0,0,17.68-3.29C276,106.14,292.11,99.78,306.73,105.14Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M281.35,144.21c8.07,5.69,20,1.83,29.08,1.36a145.19,145.19,0,0,0,17.9-2.12c4.83-.85,8.95-.43,13,2.43s.19,9.87-4,6.91c-4.95-3.48-11-.56-16.49.08-5.29.61-10.62.55-15.92,1.09-9.21.92-19.46,2.88-27.59-2.84C273.13,148.17,277.14,141.24,281.35,144.21Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M312.84,169.18c5.45-.05,12.85-.37,17.51,3,4.12,3,.13,9.95-4,6.91-4.39-3.21-13.36-2-18.81-1.78-10.08.45-20.12,1.55-30.16,2.45-8.84.79-17.87,1.77-26.75,1.22-4.8-.29-12.59-1-13.78-6.95-1-5,6.6-7.13,7.69-2.21a1.13,1.13,0,0,0,.34.18c.29.05,1.86.53,2.73.68a51.13,51.13,0,0,0,9.58.4c9.2-.17,18.38-1.15,27.54-2C294,170.25,303.44,169.27,312.84,169.18Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M243.12,195.35c-7.05,10.32-17.07,13.08-29,13.6-14.42.63-29.06.86-43.15-2.76-5-1.28-2.87-9,2.12-7.71,11.83,3,24.18,3.16,36.31,2.67,10.28-.41,20.47-.5,26.84-9.84C239.1,187.08,246,191.09,243.12,195.35Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M172.67,227.91c9.84-1.8,19.26-4.57,28.91-7.2a77.84,77.84,0,0,1,32.35-2A69,69,0,0,1,250.15,223c5.34,2.15,10.56,4.65,16.45,3.47,5-1,7.17,6.7,2.13,7.71-11.77,2.36-21.45-4.94-32.66-7.09-13.06-2.51-24.9-.93-37.52,2.8a213.25,213.25,0,0,1-30,6.76c-7.78,1.14-17.18,2.43-24.27-1.87-4.39-2.68-.37-9.59,4-6.91C155,231.91,165.56,229.21,172.67,227.91Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M175.33,245c12.92-1.68,25.48-6.14,38.6-6.12,12.68,0,25.35,3.6,37.8,5.6,5.08.81,2.91,8.52-2.13,7.71-12.32-2-25-5.69-37.53-5.28s-24.45,4.49-36.74,6.09C170.23,253.66,170.3,245.65,175.33,245Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M218.51,277.76c8.35-.66,16.55.69,24.88.86,7.18.14,16.33.16,22.11-4.78,3.9-3.33,9.58,2.31,5.66,5.66-13.08,11.17-31.71,5.84-47.2,6-11.72.13-23.07,3.28-34.63,4.83-11.77,1.59-23.57.33-35.33-.66-5.1-.44-5.13-8.44,0-8,11.08.94,22.34,2.25,33.44.9C197.86,281.31,208,278.59,218.51,277.76Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M276.23,301.33c10.39,1,20.41,4.28,30.78,5.34a94.94,94.94,0,0,0,13.28.33c2.52-.09,4.92-.22,7-1.69,1.64-1.14,3-2.61,4.67-3.76,4.22-3,8.21,4,4,6.9-3.73,2.64-6,5.33-10.77,6.09A68.63,68.63,0,0,1,313,315c-9.92-.16-19.45-2.72-29.15-4.53-10.66-2-21.66-1.74-32.45-1-11,.73-21.76,2.86-31.71,7.67-4.62,2.23-8.68-4.67-4-6.91C233.85,301.42,256.24,299.37,276.23,301.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M221,328.16a53,53,0,0,0,13.53-2.82c4.49-1.68,8-4.88,12.25-7a29.81,29.81,0,0,1,23.92-1.82c4.85,1.66,2.75,9.39-2.13,7.71a21.56,21.56,0,0,0-15.14-.16c-4.25,1.59-7.58,4.59-11.52,6.7-7.42,4-15.82,5-24.1,5.71-9.86.8-18.8.93-28.39-2-4.37-1.32-8.52-2.89-13-3.65-4.68-.79-9.31-1.34-13.8-3-4.81-1.75-2.72-9.48,2.13-7.72s9.67,2.22,14.62,3.11c4.51.81,8.68,2.49,13.07,3.77C202,329.8,211.23,329.13,221,328.16Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M220.7,375.85c-10.36,1.14-21.13,2.52-31.41.08-8.3-2-17.32-4.69-24.64-9.14-4.4-2.68-.37-9.59,4-6.91a72.19,72.19,0,0,0,26.72,9c10.06,1.22,20.62-.43,30.6-1.69,10.31-1.31,20.16-4.78,30.48-5.83a64.81,64.81,0,0,1,29.24,3.74c4.79,1.78,2.71,9.51-2.13,7.72a59.6,59.6,0,0,0-33.16-2.5C240.47,372.43,230.87,374.73,220.7,375.85Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M316,356.41c-12.45-.54-24.78-3-36.83-6.09-6.73-1.72-12.69-3.46-19.66-1.75-4.34,1.06-8.4,3-12.63,4.34-7,2.26-16,4.4-22-1.08-3.82-3.47,1.85-9.11,5.66-5.66,4.58,4.17,16-1.57,20.77-3.36a43.11,43.11,0,0,1,14.77-3.1c5.25,0,10.19,1.61,15.22,2.9,11.67,3,23.57,5.4,35.64,5.84,6,.22,12.19.15,18.07-1.32,4.81-1.21,9.45-2.93,14.3-4,5-1.09,7.15,6.62,2.13,7.72-5.67,1.23-11.09,3.39-16.78,4.54A76.71,76.71,0,0,1,316,356.41Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M342.33,330.65c-10.47,5.5-22.4,7-34.05,5.48-10.08-1.28-20.54-2.17-28.11-9.63-3.67-3.63,2-9.28,5.66-5.66s7.84,5,12.86,5.77a128.15,128.15,0,0,0,16.2,2.08,51.51,51.51,0,0,0,17.05-2.21c4.82-1.52,9.06-4.31,13.46-6.73,9.48-5.22,17.89-6,28.46-4,10.83,2,23.34,3.13,33.45-2.22,4.56-2.41,8.59,4.49,4,6.9-10.31,5.47-23.2,5.92-34.53,4-6.24-1.05-12.66-3-19-1.46C352.22,324.39,347.38,328,342.33,330.65Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M398.53,308a159,159,0,0,1-25.14-1.84c-4.67-.79-12.32-2.17-13.58-7.74-1.12-5,6.43-7.1,7.67-2.26a8.5,8.5,0,0,0,.9.47c1.25.33,2.46.84,3.72,1.14a70.68,70.68,0,0,0,10.23,1.5,212.58,212.58,0,0,0,22.43.71c19.92-.37,40.79-9.43,59.59.92,4.52,2.49.48,9.39-4,6.91-12.65-7-27.41-3.07-40.86-1.11A135.59,135.59,0,0,1,398.53,308Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M461.45,287c-13.88-.47-27.27-4.26-40.51-8.16-4.94-1.46-2.82-9.18,2.12-7.72,11.89,3.51,24,7.18,36.49,7.8,12.24.61,24.26-1.47,36.45-1.62,6.33-.08,12.63,2.15,18.8,3.33,5.43,1,15.06,3,17.68-3.71,1.86-4.75,9.59-2.67,7.71,2.12-6.88,17.52-27.88,8.13-41.27,6.43-5.43-.69-11.18.44-16.6.84A193.87,193.87,0,0,1,461.45,287Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M461,265.33c14.4,1.34,33.84,4.94,46.17-4.83,4-3.16,9.69,2.47,5.66,5.66-14.58,11.56-34.58,8.77-51.83,7.17C455.91,272.86,455.88,264.86,461,265.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M494,251.94c-5.33,1.38-10.33,3.17-15.84,3.71a72.07,72.07,0,0,1-16.73-.59,107,107,0,0,1-30.74-8.94c-4.67-2.17-.6-9.07,4-6.91a95.54,95.54,0,0,0,31.2,8.38,53.71,53.71,0,0,0,15.76-.48c5.71-1.19,11.19-3.29,16.94-4.41a145.79,145.79,0,0,1,37.82-2.32,119.6,119.6,0,0,1,17.69,2.3c6.07,1.33,11.95,3.38,18.23,3.32,5.16,0,5.15,7.95,0,8H571c-.16,0-.3,0-.45,0-5.79-.25-11.34-1.85-17-3.19a107.54,107.54,0,0,0-18.91-2.5A133.42,133.42,0,0,0,494,251.94Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M469.31,238.12c-8.35-5.6-19.54-6.06-29.29-6-11.62,0-22.62,1.32-33.33,6-4.68,2-8.75-4.84-4-6.91,12.1-5.31,24.21-7.06,37.37-7.11,11.09,0,23.84.75,33.33,7.11C477.61,234.07,473.6,241,469.31,238.12Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M473.73,209.55c-5.13-.87-10.14-2.35-15.27-3.25a35.47,35.47,0,0,0-16.36,1.24c-9.21,2.66-17.8,7.07-27,9.65-5,1.39-7.07-6.33-2.12-7.71,9-2.51,17.3-6.73,26.2-9.41s16.9-2.54,25.89-.56a147.84,147.84,0,0,0,29.63,3.78c5.56.1,16.45,2.27,20.51-2.45,3.37-3.91,9,1.77,5.66,5.66-4.6,5.34-11.91,5.06-18.36,4.88C492.83,211.11,483.28,211.18,473.73,209.55Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M515.16,167.5c-11.47,10.92-27.82,4.86-41.15,1.44-9.39-2.4-18.8-5-28.52-5.53-7.18-.37-17.55-1.13-23,4.42-3.62,3.68-9.27-2-5.66-5.66,5.17-5.27,12-6.34,19.11-6.68a100.57,100.57,0,0,1,26.29,2.31c8.47,1.83,16.79,4.32,25.21,6.36,7.33,1.77,16,3.4,22.05-2.32C513.23,158.29,518.9,163.94,515.16,167.5Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M446,129.11c-6.94.85-16.75.86-22.18,5.72-3.83,3.43-9.5-2.22-5.66-5.66,6.16-5.52,14.12-6.11,22-7.26,8.6-1.27,17.36-2.25,26.05-1.37,9.72,1,18,5.43,27.15,8.58,9.83,3.4,19-.21,29-.12,5.16.05,5.15,8.05,0,8-8.38-.08-16.67,3-25.06,1.52-9-1.57-17-6.86-25.83-9.06C463.23,127.42,454.32,128.1,446,129.11Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M432,115.79c-4.77-3-12.11-2.65-17.6-3.24s-11-1-16.56-1.27c-8.57-.36-18-1.11-26.09,2.24-4.76,2-6.82-5.77-2.13-7.71,9.07-3.76,19.81-2.91,29.4-2.48,7.08.32,14.12,1,21.15,1.88,5.42.63,11.12.71,15.87,3.67C440.38,111.6,436.36,118.52,432,115.79Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M422.9,93.89c-12.55.52-26.32,0-36.4-8.39-3.95-3.31,1.74-8.94,5.66-5.66,5.57,4.66,13.28,5.77,20.3,6.09a97.12,97.12,0,0,0,21.49-1c11.38-2.06,25.86-9.14,34.5,2.73,3,4.17-3.9,8.16-6.9,4-3.84-5.26-12.67-2.36-17.54-1A89.75,89.75,0,0,1,422.9,93.89Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M425,74.45c-7.18,3.1-14.18,2-21.51-.06-8.26-2.31-15-4.38-23.39-1.3-9.39,3.46-17.62,7.4-27.82,7.82-8,.33-17.71,2.58-25.36-.39-4.76-1.84-2.68-9.57,2.12-7.71,4,1.55,8.12,1,12.3.61,4-.41,7.9-.32,11.89-.55,9.63-.55,17.44-5.1,26.38-8.08,7-2.32,13.46-1.58,20.44.3,6.47,1.74,14.3,5.31,20.91,2.46C425.66,65.53,429.73,72.42,425,74.45Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M349.06,63.52c-2.53.53-4.55,2.15-7,3a25.64,25.64,0,0,1-6.31,1.35,82.84,82.84,0,0,1-16.36-.24c-11.28-1.14-21.07-7.58-32.63-4.13-8,2.39-15.4,4.07-23.79,3.64-6.57-.34-13.87-1.7-16.53-8.46-1.89-4.8,5.84-6.86,7.71-2.13,1.54,3.9,12.71,2.7,15.95,2.53,8.09-.41,15.29-4.63,23.38-4.8,9.94-.2,18.61,5,28.38,5.53a79.36,79.36,0,0,0,13.35.09c4.34-.5,7.51-3.27,11.69-4.14C352,54.76,354.1,62.47,349.06,63.52Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M267.25,76c8.79-1.54,17.31-5.73,26.22-6.28,3.87-.24,7.57.73,11.35,1.39,4.66.81,9.32,1.5,13.91,2.69,5,1.29,2.86,9-2.13,7.71-8.26-2.14-18.7-5-27.16-3.08S273,83.3,264.25,84.52c-18.09,2.51-36.39,1.82-54.58,2.81-5.16.28-5.12-7.72,0-8C228.83,78.29,248.27,79.33,267.25,76Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M226,97c4.84.14,12.69,1.22,16.42-2.59s9.27,2,5.66,5.66c-4.21,4.29-10.44,4.92-16.16,5a84.8,84.8,0,0,1-22-2.54c-15.2-3.8-33-9.93-48.12-2.59-4.62,2.25-8.67-4.65-4-6.9,13.4-6.52,28.67-4.62,42.68-1.24C208.89,93.86,217.21,96.76,226,97Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M264.73,134.81c5,1,2.9,8.75-2.13,7.71-10.33-2.13-20.19-6.09-30.41-8.71s-21.68-4.48-31.17,1.31c-4.41,2.69-8.43-4.23-4-6.91C218,115.35,243.44,130.41,264.73,134.81Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M204.67,179c.19-5.14,8.19-5.15,8,0-.65,17.57-22.9,15.24-35,13.66-11.47-1.5-23.07-2.77-34.61-3.45-4.73-.27-9.52-.42-14.26-.33-4,.07-9.55-.07-12.3,3.28-3.28,4-8.91-1.71-5.66-5.66,5.11-6.21,15.41-5.74,22.66-5.6,12.39.25,24.62,1.76,36.94,2.93C177.69,184.51,204.23,191,204.67,179Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M118.44,207.38c7.2-.57,14.56-1.21,21.75-.42s14.27,2.58,21.48,3.37c5.07.56,5.11,8.56,0,8-6.38-.7-12.61-2.09-18.95-3s-12.59-.63-19-.27a157.91,157.91,0,0,0-17.1,1.86c-4.12.69-9.87,1.09-13.17,4-3.88,3.35-9.56-2.28-5.66-5.66C95.45,208.58,108.87,208.15,118.44,207.38Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M94.57,226.33c6.13,0,12.3.62,18.43.42,6.44-.21,12.7-2.13,18.94-3.61,5-1.18,7.13,6.53,2.12,7.72-6.63,1.57-13.27,3.49-20.11,3.84-7.09.35-14.22-.45-21.32-.36C79.77,234.5,68,235.87,56,230.2c-4.66-2.19-.59-9.08,4-6.9C71.11,228.52,82.79,226.3,94.57,226.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M148.23,260.2c9.5,2.62,18.31,6.78,28.44,5.8,7.45-.72,16-1.29,22.64-5.12,4.47-2.59,8.49,4.33,4,6.91-6.48,3.76-14,4.65-21.34,5.55a59.28,59.28,0,0,1-25.89-2.16c-9.14-2.81-17.76-5.86-27.49-5.71-4.66.07-9.12.71-13.22,3-3.41,1.93-6.47,4.31-10.06,5.95-4.65,2.13-8.71-4.76-4-6.9,7.43-3.4,12.84-8.46,21.23-9.61C131.1,256.77,139.93,257.9,148.23,260.2Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M108.73,315.8c7.75-4.24,16.29-5.56,24.8-7.44,9.14-2,18.27-4.2,27.66-4.65,9.67-.46,19.38-.06,29.06-.21,6.95-.11,15.3,1.17,21.23-3.2,4.15-3.06,8.14,3.88,4,6.9-5.77,4.26-13.3,4.29-20.18,4.27-8.88,0-17.77,0-26.65.06a138.48,138.48,0,0,0-29.38,3.73c-8.89,2-18.45,3-26.54,7.44C108.24,325.18,104.21,318.27,108.73,315.8Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M170,342.15c6.05.52,10.87,3.31,16.57,5a50,50,0,0,0,20.21,1.38c5.11-.62,5.05,7.39,0,8A56.92,56.92,0,0,1,186,355.27c-6.78-1.72-12.32-5.07-19.49-5.27A153,153,0,0,0,123,354.88c-6.54,1.7-13.12,3.34-19.89,3.86-5.91.46-11.85-.19-17.75-.63-10.85-.81-22.49-2.05-31-9.53-3.87-3.41,1.81-9.05,5.66-5.66,8.13,7.17,21,6.84,31.19,7.59a69.86,69.86,0,0,0,19.15-.82c6.31-1.26,12.46-3.16,18.73-4.58A134.65,134.65,0,0,1,170,342.15Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M168.8,380.74c10.55-1.42,19.79,3.07,29.51,6.37a74.62,74.62,0,0,0,16.09,3.14c4.59.5,10.43,2.53,14.75.3,4.57-2.36,8.61,4.54,4,6.9-4.4,2.27-8.59,2.23-13.38,1.55-5.62-.81-11.39-1-16.94-2.24-11.12-2.4-21.32-9.52-33.05-8.13-22.34,2.66-41.92,19.21-65.22,15.89-5.08-.72-2.91-8.43,2.13-7.71,10.08,1.43,21.93-2.66,31.16-6.4C148.21,386.23,157.66,382.23,168.8,380.74Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M104.91,413a146.15,146.15,0,0,0,32.52-.66A91.3,91.3,0,0,0,153.84,409c4.94-1.62,9.46-3.38,14.74-2.9,10.26.92,20.85,2.57,31,4.5,5.06,1,2.91,8.68-2.12,7.72-6.26-1.2-12.57-1.91-18.88-2.74-5.66-.75-11.21-2.32-16.84-.79s-10.57,3.39-16.22,4.34c-5.27.89-10.57,1.62-15.89,2.05a135.6,135.6,0,0,1-33.91-1.37,71.35,71.35,0,0,1-15.07-4.54c-4.19-1.7-8.72-1.74-12.13-5-3.73-3.56,1.94-9.21,5.66-5.66,1.7,1.62,5.29,1.65,7.42,2.44,2.52.94,4.93,2.14,7.5,3A72.84,72.84,0,0,0,104.91,413Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M145.81,448.8c11.23-4.57,19.43-14.83,31.76-16.94,6-1,12.38.08,18.32,1,7.58,1.19,15.13,2.56,22.77,3.35s15.2,1.56,22.51-1.44c4.24-1.74,10.63-3.24,14-6.37,3.77-3.5,9.44,2.14,5.66,5.66-4,3.68-9.58,5-14.43,7.12a41.73,41.73,0,0,1-20,3.65A219.14,219.14,0,0,1,204,442.27c-7.36-1.13-14.92-3-22.41-2.79-6.31.19-12,3.6-16.91,7.25a74.52,74.52,0,0,1-17.57,10.1A91.11,91.11,0,0,1,103.75,462c-5.07-.57-5.11-8.58,0-8C118.08,455.62,132.38,454.27,145.81,448.8Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M164.73,487.84c5-2.5,8.36-7.24,13.49-9.61s10.68-3.53,16.16-4.51c5.77-1,11.5-2.15,17.37-1.42,5.34.67,10.33,2.6,15.41,4.3,5.93,2,11.82,2.54,18,2.93,4.25.27,11,2.61,14.78.27,4.41-2.7,8.42,4.22,4,6.9-4.65,2.85-9.73,1.75-14.83,1.16-6.18-.72-12.44-.57-18.55-1.91-6.28-1.38-12.09-4.39-18.43-5.54-6.75-1.22-14.05.52-20.66,2a46.65,46.65,0,0,0-10,3c-3.06,1.48-5.34,4-7.94,6.13-4.74,3.84-10.61,5.81-16.52,7a63.11,63.11,0,0,1-19.87.75c-4.69-.51-9.51-.6-13.27-3.78-3.93-3.34,1.75-9,5.66-5.66,1.73,1.47,5.48,1.21,7.61,1.44a67.19,67.19,0,0,0,8.14.56C151.77,491.86,158.9,490.74,164.73,487.84Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M206.94,493.89c16.84-5.07,32.59,6.93,49.67,3.4,8.1-1.67,15.21-3.75,23.62-3.14,9,.65,17.76,2.77,26.77,3.1,5.14.19,5.15,8.19,0,8-8.41-.31-16.61-2.14-25-2.95a46.69,46.69,0,0,0-13.2.2c-4,.76-7.8,2.13-11.79,2.85a57.09,57.09,0,0,1-22.72-1.07c-8.62-2-16.3-5.37-25.26-2.67C204.11,503.1,202,495.37,206.94,493.89Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M333,509.73c-4.52-.61-7.6,1.06-11.49,3.09-3.37,1.75-7,3.38-9.07,6.7-2.74,4.35-9.66.33-6.9-4,3.76-6,10.7-9.34,16.95-12.19,7.5-3.42,14.92-.43,22.64.34a142.15,142.15,0,0,0,25.93-.1c7.88-.67,14.15-3.26,19.35-9.36,3.35-3.92,9,1.76,5.66,5.66-9.95,11.66-24.22,12-38.47,12.35C349.19,512.39,341.27,510.85,333,509.73Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M385.06,488.66c-6.74,2.89-14.09,3.64-21.37,3.4-8.3-.28-16.54-1.68-24.82-2.24a143.87,143.87,0,0,1-22.94-3.06,104.8,104.8,0,0,1-20.74-7.54c-5-2.36-11-3.26-14.31-8.2-2.85-4.31,4.08-8.31,6.91-4,1.5,2.27,5.55,2.75,8,3.72,3.49,1.41,6.76,3.28,10.26,4.67A93.24,93.24,0,0,0,329,481c7.88.94,15.81,1.33,23.7,2.19,8.05.89,16.41,1.77,24.39-.18,13.21-3.24,22.49-14.65,35.12-19.25,10.15-3.7,23.39-4.35,31.58,3.79,3.66,3.64-2,9.3-5.66,5.66-9.11-9.06-24.85-2.09-33.66,3.72C398.17,481.07,392.09,485.66,385.06,488.66Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M411.5,422.05c-6.44,3.05-13.08,5.76-20.15,6.93-6,1-12.17,1.2-18.22,1.77-11.77,1.1-25.45,2.52-36.15-3.63-4.47-2.57-.43-9.48,4-6.91,10,5.74,23.9,3.34,34.8,2.28,6-.59,12.21-.71,18.11-2.22,6.72-1.72,12.92-4.79,19.09-7.86,12-6,23.84-11.3,37.58-10.11,13.48,1.17,28.82,7.08,40.71-2.09,4.08-3.14,8.06,3.81,4,6.91-12.4,9.55-27.45,5.19-41.56,3.51-7.52-.89-14.49-.62-21.69,1.92S418.33,418.81,411.5,422.05Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M464.35,371.12c-7.18,4.48-17.12,1.78-25,1-11.66-1.17-22.28-6.06-33.82-7.82-13.26-2-26.72-3.82-39.94-.63-11.51,2.78-22.4,7.36-34.31,8.34-5.14.42-5.09-7.58,0-8,12-1,23-6.17,34.68-8.62,11.33-2.38,22.82-1.47,34.2.1a123.68,123.68,0,0,1,18.13,3.37c5.71,1.67,11.33,4,17.24,4.87,4.25.66,8.66,1,12.94,1.44,3.68.35,8.5,1.11,11.79-1C464.7,361.48,468.71,368.4,464.35,371.12Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M392,344.12c-4.31,2.86-8.31-4.07-4-6.91,15.11-10,34.6-12,52.3-11.58a165.38,165.38,0,0,1,28.83,3.31c11,2.23,22.09,4.58,32.87-.06,4.68-2,8.75,4.88,4,6.91-19.62,8.44-39.77-.69-59.93-1.91C428,332.79,407.58,333.8,392,344.12Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M476.45,318c-3,4.12-9.94.13-6.9-4,9.31-12.77,23.21-14.6,38-12.42,8.91,1.31,17.69,4,26.75,3.92,4.69,0,15.36.69,17.19-4.88,1.6-4.87,9.32-2.77,7.71,2.13-2.11,6.42-7.32,9.09-13.73,9.93a77.35,77.35,0,0,1-22.33-.18C507.85,310.05,487.53,302.83,476.45,318Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M614.06,241.19A28.18,28.18,0,0,1,594.58,240c-4-1.66-7.93-4.13-12.47-3.52-3.6.49-7.07,2.36-10.38,3.75-4.75,2-6.8-5.75-2.13-7.71,6.83-2.88,13.18-5.51,20.58-3,8,2.66,13.06,6.48,21.76,4C616.91,232.08,619,239.8,614.06,241.19Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M602.33,214.33a31.5,31.5,0,0,0-16,2.46,67.11,67.11,0,0,1-15.08,4.55,100.92,100.92,0,0,1-15.87,1.87c-5.68.07-11.28-1.07-16.95-1.2-11.13-.26-18.72,8.57-29.39,10.54-9.82,1.82-20,.24-29.46-2.69-4.91-1.53-2.8-9.25,2.13-7.72,9.9,3.08,21.27,5,31.21,1,4.72-1.89,8.72-5.19,13.42-7.17,4.41-1.85,9.12-2.15,13.86-1.89,5.66.32,11.29,1.38,17,1.07a93.19,93.19,0,0,0,17-2.59c5-1.23,9.39-3.67,14.25-5.13a37.17,37.17,0,0,1,13.85-1.1C607.44,206.75,607.47,214.75,602.33,214.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M600.5,199.5c-6.81,6.33-17.82,4.9-26.22,3.5-5.3-.88-10.34-2.2-15.79-1.88-6.76.41-12.83,3-18.47,6.67-4.35,2.8-8.35-4.13-4-6.91,9.83-6.34,20.67-8.95,32.28-7.16,4.71.72,9.27,1.95,14.06,2.27,3.87.25,9.45.71,12.52-2.15C598.61,190.33,604.27,196,600.5,199.5Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M590.35,172.88c4.61,2.32.55,9.21-4,6.91-5.29-2.66-11.09-6-17.22-4.68-5.41,1.17-10.69,4.29-15.87,6.29-5.54,2.13-10.88,5.18-16.89,5.78s-11.66-2-17-4.39c-4.68-2.13-.61-9,4-6.91,3.42,1.55,7.44,3.54,11.32,3.45,3-.06,6-1.3,8.68-2.4,5.69-2.3,11.37-4.64,17-7.08,4.7-2,9.39-3.6,14.56-2.86C580.42,167.77,585.44,170.41,590.35,172.88Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M546,144.13c8.45,3.57,15.36,9.9,25,9.87,5.16,0,5.15,8,0,8-9.94,0-17-5.06-25.48-9.33a36.11,36.11,0,0,0-15-4c-4.46-.12-8.67,1.14-13,2.05-15.94,3.38-34.09,5.88-49.17-1.89-4.58-2.37-.53-9.27,4-6.91,14.62,7.53,33.14,3.32,48.33-.11A41,41,0,0,1,546,144.13Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M530.4,96.14c4.75,1.86,2.67,9.59-2.13,7.72-15.67-6.14-33.39-.36-49.49,1.54-11.85,1.4-27.8,3.64-38.13-4-4.11-3-.12-10,4-6.9,9.86,7.24,26.32,3.83,37.59,2.42C498.2,95,514.83,90.05,530.4,96.14Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M502.5,77.17c3.57-3.73,9.21,1.93,5.66,5.66-5.26,5.51-13.79,4.11-20.51,2.83-4.74-.9-9.43-1.9-14.1-3.12-4.36-1.15-9.24-1.26-13.24-3.42-4.53-2.45-.49-9.36,4-6.91,3,1.62,7.15,1.51,10.45,2.38,3.93,1,7.83,2,11.82,2.73C490.91,78.15,499,80.85,502.5,77.17Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M465.31,60.18c4.11,1,8,.13,12-1,5-1.45,7.06,6.27,2.13,7.72-7.31,2.14-13.75,2.19-20.91-.47-9.5-3.53-17.75-6.19-27.14-.6-4.44,2.64-8.46-4.28-4-6.91a31.34,31.34,0,0,1,25.2-3.19C456.86,56.93,460.89,59.16,465.31,60.18Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M443,42.79c-14.31,9.86-34.23,14.21-51.08,8.07-4.81-1.75-2.72-9.48,2.12-7.72,15,5.48,32.19,1.51,44.92-7.26C443.23,33,447.23,39.88,443,42.79Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M407,30.88c4.71,2.06.63,9-4,6.91-9-3.93-16.47,4-24.3,7.23-10.08,4.12-20.81,7.09-31.74,5.5-5.09-.73-2.91-8.44,2.12-7.71,11.39,1.65,24.07-3.31,33.77-8.94C390.9,29.19,398.11,27,407,30.88Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M331.67,16.33c14.66-1.94,32.16-4.66,44.16,6.17,3.83,3.47-1.85,9.11-5.66,5.66-9.92-9-26.55-5.41-38.5-3.83C326.57,25,326.64,17,331.67,16.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M326.08,37.76c7.05-2.31,14.35-5.42,21.92-5.09,5.14.22,5.15,8.22,0,8-16.7-.73-34.14,16.34-49.83,3.49-4-3.26,1.71-8.89,5.66-5.66C310,43.55,319.47,39.93,326.08,37.76Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M258.31,17.88a43.62,43.62,0,0,1,30.05-1.73c4.73,1.51,17.35,7.73,20.85,1.83,2.63-4.43,9.55-.4,6.91,4-4.57,7.69-14.46,6.59-21.91,4.56-4.5-1.23-8.68-3.26-13.34-3.92a35,35,0,0,0-18.52,2.13C257.67,26.8,253.6,19.91,258.31,17.88Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M193.67,37.67c8.73-.07,17.29-.57,25.93,1,8.34,1.54,16.06,4,24.67,3.48C252,41.66,259.93,40,266.61,36c6.37-3.9,11.91-6.3,19.45-4.48,5,1.2,2.88,8.91-2.12,7.71-7.61-1.83-13,4.27-19.59,6.88a67.49,67.49,0,0,1-21.65,4.19c-8.13.36-15.62-1.85-23.48-3.49-8.48-1.78-17-1.16-25.55-1.1C188.51,45.7,188.52,37.7,193.67,37.67Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M156.65,60.55c21.77-10.46,48.62-7,70,2.66,4.68,2.13.61,9-4,6.91-18.58-8.42-43-11.75-62-2.67C156.06,69.67,152,62.77,156.65,60.55Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M138.45,77.65c1.85,2.55,7.41,2.11,10.08,2a89.84,89.84,0,0,0,11.8-1.3c10.5-1.69,20.65-4,29.32-10.51,4.12-3.09,8.11,3.86,4,6.91C183.4,82.5,170.81,85,158.35,86.73c-8.61,1.22-20.94,3.08-26.8-5C128.53,77.5,135.47,73.51,138.45,77.65Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M130,106.48c2.21,4.35,8.93,5.23,13.21,6.23,7.26,1.69,13.13,1,20.34-.72,15-3.46,30.11-4.61,44.81.65,4.82,1.73,2.73,9.46-2.12,7.72a60.07,60.07,0,0,0-26.92-3.08c-8.52.87-16.67,3.9-25.16,4.66-6.25.56-12.91-1.17-18.88-3-4.79-1.49-9.8-3.7-12.18-8.4S127.62,101.89,130,106.48Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M89.94,120.39c9.34-3.8,18.55-2.71,28.2-1,7.27,1.31,16.66,3,21.69,9,3.3,3.92-2.34,9.6-5.66,5.66-4.06-4.82-12.3-5.88-18.16-6.94-8.27-1.5-15.92-2.3-24,1C87.29,130.05,85.23,122.31,89.94,120.39Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M67.69,147.39c7.5-1.16,14.9-3.58,22.47-4.3,5-.48,7.66,1.52,11.17,4.83,3.75,3.55-1.92,9.19-5.66,5.66-1-1-2-2.27-3.37-2.64-1.8-.48-4.81.63-6.59,1-5.31,1.05-10.55,2.36-15.9,3.19C64.77,155.89,62.61,148.18,67.69,147.39Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M67.52,162.05c8.25,3.58,18,3.33,26.82,3.32a213.39,213.39,0,0,0,29.13-2c8.51-1.18,17-3.63,25.68-3S165.42,166.23,174,166c5.16-.14,5.14,7.86,0,8-9.37.25-17.24-5.46-26.55-5.7-9.53-.25-19.08,2.62-28.53,3.69a221,221,0,0,1-30.22,1.32c-8.64-.21-17.22-.88-25.22-4.36C58.77,166.91,62.84,160,67.52,162.05Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M45.48,181.8c9.44-4.63,18-2.2,27.48,1,5.16,1.77,17,5.93,20.09-.85,2.16-4.67,9-.6,6.9,4-3.38,7.31-12,8-19,7.08-10.3-1.41-21.12-9.43-31.4-4.4C44.91,191,40.86,184.06,45.48,181.8Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M33.92,208.17a45.28,45.28,0,0,1,23.8-9.44,26.49,26.49,0,0,1,12.21,1.66c5.24,2,9.87,4.55,15.51,2.5,4.85-1.76,6.92,6,2.12,7.72C78.23,214,71.93,208,63.1,206.72c-7.74-1.14-17.5,2.29-23.52,7.11C35.6,217,29.9,211.39,33.92,208.17Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M21.25,246c9.36.06,18.3-4.2,27.65-5A87.44,87.44,0,0,1,75,242.88c9.17,2,17.76,5,27.23,5.34,4.4.17,8.93.29,13-1.69,3.22-1.58,6-4.07,8.83-6.23,4.09-3.14,8.07,3.81,4,6.9-6.36,4.89-12,8.68-20.27,9.05-9.51.42-19-1.33-28.06-3.89a86.11,86.11,0,0,0-29.89-3.44c-9.72.73-18.76,5.14-28.55,5.08C16.1,254,16.1,246,21.25,246Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M16.69,337.64c11.62-2,21.11-7.83,32.07-11.61a53.54,53.54,0,0,1,31.07-1.35c9.24,2.41,18.13,5.41,27.63,6.69,7.43,1,17.71,2.08,23.71-3.45,3.79-3.48,9.45,2.16,5.66,5.66-12.27,11.3-34.35,6-48.67,1.93-6.26-1.8-12.45-4.24-19-4.54a49,49,0,0,0-17.44,2.5c-5.7,1.88-10.95,4.95-16.5,7.21a79,79,0,0,1-16.38,4.68C13.77,346.22,11.62,338.51,16.69,337.64Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M22.1,365.48c4.34-1.22,7.48-4.78,11.92-5.88a49.07,49.07,0,0,1,14.36-.85,162.79,162.79,0,0,1,31.19,4.94c10.44,2.74,19.79,7.81,30.54,9.42a44.7,44.7,0,0,0,16.93-.76c4-.92,8.3-1.46,11.61-4,4.1-3.12,8.08,3.83,4,6.91-3.51,2.66-7.8,3.42-12,4.41a62.82,62.82,0,0,1-14.37,2,69.79,69.79,0,0,1-15.53-2.23c-5-1.19-9.38-3.56-14.19-5.3-11-4-22.88-5.86-34.48-7.07-5.15-.54-10.9-1-16,.24-4.29,1.06-7.55,4.66-11.91,5.88C19.26,374.59,17.15,366.86,22.1,365.48Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M28.23,391.81c7.84,1.54,18.33,3.43,25.64-1,5.48-3.34,9.81-5.5,16.39-6,6.36-.48,19.51-1.78,21.76,6.31,1.39,5-6.33,7.08-7.71,2.13.28,1,.12.1-1.17-.08-.76-.1-1.51-.29-2.27-.38a45.72,45.72,0,0,0-6.19-.17c-4.18.09-8.66.19-12.45,2.13-2.63,1.35-4.62,3.32-7.42,4.42A33.38,33.38,0,0,1,46.67,401c-7,.87-13.73-.13-20.57-1.48C21.05,398.53,23.2,390.82,28.23,391.81Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M37.17,437.33c-5.12-.36-5.14-8.36,0-8,9.54.68,16.77-6.4,26-7.78,8.05-1.21,16.17.47,23.64,3.52,8.44,3.44,15.75,8.55,24.89,10.2a31.12,31.12,0,0,0,14.54-.81c4.07-1.14,8.33-1.86,12.24-3.48,4.75-2,6.81,5.76,2.12,7.71-4.13,1.72-8.71,2.52-13,3.7A35.22,35.22,0,0,1,115,443.74c-9.22-.83-17.1-4.23-25.18-8.49-8.36-4.41-18.23-7.68-27.71-5.38-4.42,1.07-8.11,3.7-12.3,5.36A28.48,28.48,0,0,1,37.17,437.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M50.29,455.85c-2.68,4.4-9.6.37-6.91-4,2-3.37,5.52-4.92,9-6.45,3.19-1.39,6.18-3.46,9.72-3.82,4.35-.46,8.49,1.1,12.16,3.3,2.82,1.7,7.66,4.72,11,2.87,4.53-2.47,8.56,4.44,4,6.91-5.91,3.22-13.17.76-18.51-2.49-4.37-2.66-7.31-3.17-11.91-1C56.4,452.37,51.83,453.32,50.29,455.85Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M61.81,470.88c12.64-8.47,29.29,1.18,42.59,3.6,7.46,1.35,15.46,2,22.87,0A69.17,69.17,0,0,0,140,469.07c2.8-1.41,5.25-3.42,8.23-4.43,4.9-1.65,7,6.08,2.13,7.72-3.28,1.1-6.65,3.8-9.84,5.31a81.31,81.31,0,0,1-9.57,4.07c-6.73,2.17-14.07,2.31-21.05,1.56a134.52,134.52,0,0,1-22-4.65c-7.26-2-15.29-5.42-22.09-.86C61.56,480.67,57.56,473.73,61.81,470.88Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M78,498.69c-3,4.1-10,.1-6.9-4,3.83-5.2,9.55-4.91,15.41-4.07,7.19,1,15.66,3.09,22.35-.7,4.49-2.54,8.52,4.37,4,6.91-5.75,3.26-12.24,3.55-18.7,2.87C91.48,499.38,79.85,496.11,78,498.69Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M83.31,516.29c-4.65-2.21-.59-9.1,4-6.91,10.59,5,21.62,2.67,33,3.12,11,.44,22.21.21,32.91-2.77,10.24-2.87,21.14-5.74,31.86-5.72,10.39,0,20.18,4.4,30.15,6.8,5,1.21,2.88,8.92-2.13,7.71-11.09-2.67-21.56-7.43-33.18-6.24s-22.25,5.34-33.59,7.09c-11.14,1.71-22,.74-33.21.93-5.46.09-10.9.82-16.36.27C91.9,520.09,87.68,518.36,83.31,516.29Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M110.82,544.63c-4.37-1.16-10.72-2.8-12.18-7.73s6.26-7.06,7.72-2.13c-.28-.94,1.46.47,2.29.8a34.28,34.28,0,0,0,3.76,1.2,41.36,41.36,0,0,0,6,1.29,30.92,30.92,0,0,0,19.24-4.45c3.2-1.87,6.46-2.34,10-3.14s7.09-2.34,10.84-2.86c6.15-.85,12.91-1.14,18.67,1.44,4.69,2.1.62,9-4,6.9-7.71-3.44-17.28,1-24.8,2.52-7.32,1.47-13.15,6-20.73,7.19A40.54,40.54,0,0,1,110.82,544.63Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M175.69,556.23c-2.54,6.66-12.72,9.64-19.19,10.31-10.27,1.06-20.36-2.75-28.85-8.09-4.36-2.73-.34-9.65,4-6.9a43,43,0,0,0,19.81,7A21.76,21.76,0,0,0,161.62,557c1.26-.46,5.83-1.48,6.36-2.86C169.79,549.33,177.53,551.41,175.69,556.23Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M202.81,582.83c-6.68,1.35-14.58,2.12-19.31,7.5-3.42,3.87-9.05-1.81-5.66-5.66,4.73-5.37,10.9-6.87,17.6-8.36,8.05-1.79,15.51-3.32,23.67-1.09,4.39,1.19,8.63,3,13.09,3.91s9,.67,13.36.61,9,0,13.29-.86c3.87-.81,7.14-3.28,10.63-5,4.61-2.27,8.66,4.63,4,6.91-6.88,3.39-11.83,6.06-19.66,6.62-8,.58-16.79,1.08-24.66-.78-4.44-1-8.66-2.89-13.1-3.94A30.11,30.11,0,0,0,202.81,582.83Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M232.83,604c-5.07-.54-5.11-8.54,0-8a178.84,178.84,0,0,0,23.61.55c7.54-.22,13.91-2.89,21-5.08,6.22-1.92,11.75-5.18,17.87-7.34,5.56-2,9.88-6,15.77-7.15,12.18-2.29,26.09,1.88,37.38,6.19,6.9,2.63,13.77,3,21.11,3.05,7.1,0,14.66.91,20.61-3.72,4-3.12,9.72,2.5,5.66,5.66a27,27,0,0,1-16.5,6,146.79,146.79,0,0,1-23.16-.67c-7.11-.9-13.45-4.38-20.37-6.06-6.71-1.63-13.86-3.67-20.81-3-6.45.64-11.52,5.25-17.56,7.38-6.66,2.36-12.72,5.71-19.5,7.84-7.26,2.28-13.77,4.66-21.49,4.87A180.53,180.53,0,0,1,232.83,604Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M304,623.16c-7.49-6.94-18.35-.91-27-.24-4.27.34-9.71.94-13.91-.06s-6.84-4.57-10.63-6.24c-4.7-2.08-.63-9,4-6.91,2.19,1,3.81,2.44,5.75,3.77,2.66,1.82,4.49,1.75,7.62,1.63a83.1,83.1,0,0,0,15.62-1.94c8.62-2,17.33-2,24.15,4.33C313.45,621,307.78,626.66,304,623.16Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M377.25,622.25c-4-.46-7.79.82-11.75.5a25.33,25.33,0,0,1-8.21-2.48c-5.84-2.67-10.48-6.34-15.35-10.42-11.6-9.69-29.24-6.19-43.19-6.1-5.16,0-5.15-8,0-8,13.53-.09,29.05-2.59,41.73,3.48,5.92,2.82,10.1,8.25,15.78,11.48,3,1.73,6.26,3.61,9.8,3.95,3.75.36,7.4-.85,11.19-.41C382.31,614.83,382.36,622.84,377.25,622.25Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M409.19,613.36a69.85,69.85,0,0,1-8.72-4.94,20,20,0,0,0-9.12-2.58c-5.87-.53-13.49-1.47-18.83,1.61-4.47,2.58-8.5-4.33-4-6.9,6.4-3.69,14.49-3.39,21.61-2.82,3.72.3,7.58.53,11.05,2,3.64,1.54,6.53,4.38,10.17,5.91C416,607.61,413.92,615.35,409.19,613.36Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M459.81,595.86c-3.81.62-7.17,2.48-11.05,3-4.46.58-9,0-13.43.23-4.15.16-8.53.84-12.64,0-3.77-.74-6.72-3-10-4.91-4.46-2.58-.42-9.49,4-6.9,3.3,1.91,5.66,3.89,9.65,4.1,3.55.19,7.14-.33,10.69-.38,4.1-.07,8.28.51,12.33-.38,2.84-.62,5.36-2,8.25-2.5C462.73,587.31,464.88,595,459.81,595.86Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M482.06,577.61a26.58,26.58,0,0,1-13.37.41c-4.2-1.1-7.2-4.09-11.06-5.84-8.52-3.86-19.36-2.85-28.24-1.14-10.56,2-20.7,4-31.52,3.75-4-.08-8.39.08-12.26-1s-5.84-3.89-8.88-6.09c-4.14-3-.14-9.93,4-6.9,3.27,2.37,5.25,5.18,9.48,5.68a90.87,90.87,0,0,0,13.2.28c10-.28,19.32-2.94,29.11-4.33,7.79-1.11,16.15-1.22,23.82.84a35.48,35.48,0,0,1,9.89,4.78c4.46,2.82,8.57,3.15,13.67,1.84S487.05,576.33,482.06,577.61Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M515.69,545.45c-20.55,13.36-48.15,13.73-70.94,7.29-23.94-6.75-55-19.7-76.92-.58-3.87,3.38-9.54-2.26-5.66-5.66,20.58-18,49.13-12.44,72.84-5.08,13.67,4.25,27.25,8.45,41.75,7.38,11.85-.87,24.81-3.71,34.89-10.25C516,535.73,520,542.66,515.69,545.45Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M523.27,530.19c-7.42-2.2-14.92-4.55-22.69-5.07-6.95-.46-13.73.65-20.46,2.28-12.7,3.07-25.35,7.41-38.59,5.56-14.26-2-27.19-9.48-41.65-10.76a82.68,82.68,0,0,0-41.53,7.59c-4.63,2.18-8.69-4.72-4-6.91A94.09,94.09,0,0,1,395.55,514c15.25.25,28.8,6.84,43.36,10.36,14.95,3.62,29.43-2.84,43.9-5.74,14.87-3,28.26-.38,42.59,3.87C530.33,523.94,528.22,531.66,523.27,530.19Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M543.94,509.86c-4.84-.88-8.44-4.44-13.34-5.29a64.31,64.31,0,0,0-18.74-.13c-11.55,1.46-22.63,4.33-34.37,3.26-6.09-.55-12.13-1.66-18.25-2-5-.26-10-.06-15-.77-10.47-1.51-20-8-28.61-13.82-4.25-2.87-.24-9.8,4-6.91,8.91,6,18.51,12.61,29.53,13.2,5.47.29,10.91.24,16.37.86,5.78.66,11.54,1.66,17.37,1.75,11.55.17,22.7-3.44,34.19-4.06a63,63,0,0,1,16.5,1.09c4.49,1,8,4.3,12.41,5.09C551.13,503.06,549,510.77,543.94,509.86Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M577.83,484.83c-6.05,4.9-12.63,8.89-20.47,9.91-8.49,1.09-16.29-3.14-24.69-2.41-5.14.45-5.09-7.56,0-8,7-.61,13.33,2.47,20.24,2.67,7.29.22,13.75-3.37,19.26-7.83C576.14,476,581.83,481.59,577.83,484.83Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M585.67,464.67c-3.4.06-6.52-2.37-9.8-3-5.32-1.05-11,.14-16.27.64-7.31.68-14.49-.06-21.76-.82-9.92-1.05-27.15-2.81-27.84-15.81-.27-5.16,7.73-5.12,8,0,.23,4.27,7.33,5.62,10.52,6.35a112.44,112.44,0,0,0,14.74,2,106.93,106.93,0,0,0,21.76-.27c4.12-.44,8.62-.77,12.71.1,2.44.52,5.55,2.9,7.94,2.86C590.83,456.57,590.81,464.58,585.67,464.67Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M600.73,443.52c-7.79,1.08-14.21-.84-21.7-2.62-8.68-2.07-16.13.42-24.7,1.43-5.11.61-5.05-7.4,0-8,7.66-.9,14.46-3.19,22.25-2,7.4,1.09,14.4,4.56,22,3.51C603.65,435.11,605.81,442.82,600.73,443.52Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M604.67,418c-14.9.86-29.5,1.88-44.39.37-7.8-.8-13.89-.49-21,3.26-5.83,3.09-11.2,7-17.59,8.89-6.76,2-13.92,1.55-20.89,1.78-7.38.25-14.77.87-22.16.37S464.27,430.62,457,430c-8.24-.77-15.6,1.51-23.62,2.91-5,.88-7.19-6.83-2.13-7.72,7.39-1.29,14.6-3.67,22.17-3.44,7.86.24,15.58,2.17,23.41,2.82,7.42.63,14.83.17,22.26-.15s15,.46,22.09-2.07,12.8-7.42,19.65-10.24c6-2.49,12.26-2.43,18.63-1.78,15.18,1.55,30,.6,45.19-.28C609.82,409.7,609.78,417.7,604.67,418Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M611.12,391c-5,8.54-15.47,11.31-24.71,12.1s-20-.08-28.1-5c-4.39-2.68-.36-9.6,4-6.91,6.27,3.83,14.58,4.38,21.74,4.06,6.91-.31,16.29-1.74,20.12-8.29C606.82,382.54,613.73,386.57,611.12,391Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M619.12,334.35c-6,9.8-21.23,11.35-31.59,11.64-7.93.22-15.8-.89-23.69-1.47a43.18,43.18,0,0,0-19.45,2.93c-29.34,10.93-61.56,2.17-92.06,3.55-5.15.23-5.12-7.77,0-8,14.93-.68,29.88.48,44.78,1.27,14.27.76,28.46,1.61,42.12-3.39,5.52-2,10.86-4.15,16.79-4.57,7-.49,14.14.84,21.09,1.35a77.77,77.77,0,0,0,21.16-1c4.89-1,11.12-1.71,13.94-6.37C614.88,325.91,621.8,329.94,619.12,334.35Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
                  <path className="wiggle-path" d="M622,315.33c-9.06-1-18.92-7.19-28.07-5-3.78.89-6.94,3.42-10,5.65a68.49,68.49,0,0,1-11.21,6.67,70.74,70.74,0,0,1-25.22,6.77c-9.4.59-18.2-3.5-27.48-4.06-5.12-.3-5.14-8.3,0-8,9.54.57,18.73,4.84,28.33,4a63.19,63.19,0,0,0,26.22-8.71c6.77-4,12.25-9.7,20.46-10.54,9.49-1,17.8,4.2,27,5.25C627.06,307.92,627.11,315.92,622,315.33Z" transform="translate(-4 -4)">
                   {animate && <animateTransform
                      attributeName="transform"
                      type="translate"
                      dur={`${scale(5, 10, 0, 1, Math.random(1))}s`}
                      repeatCount="indefinite"
                      values={Math.random() > 0.5 ? "50; -50; 50" : "-50; 50; -50"}
                    />}
                  </path>
              </mask>
            </svg>
          </div>
        </Parallax>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

WiggleWorm.defaultProps = {
  size: 80,
  speed: 5,
  color: "black"
}

