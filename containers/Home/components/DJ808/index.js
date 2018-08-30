import React, {Component, Fragment} from 'react'
import styles from '../../styles/sequencer'
import Knob from './Knob';
import Button from './Button'
import Sequencer from './Sequencer'
import ActivableRenderer from '../../../../hocs/ActivableRenderer';
import cn from 'classnames';
import Tone from 'tone';
import throttle from 'lodash.throttle'

class DJ808 extends Component {
  genEmptySeq = () => {
    return {
      BD: Array(16).fill(false),
      SD: Array(16).fill(false),
      LT: Array(16).fill(false),
      MT: Array(16).fill(false),
      HT: Array(16).fill(false),
      RS: Array(16).fill(false),
      CP: Array(16).fill(false),
      CB: Array(16).fill(false),
      CY: Array(16).fill(false),
      OH: Array(16).fill(false),
      CH: Array(16).fill(false)
    }
  }
  componentDidMount(){
    if(this.props.mobile){
      document.body.style.overflow = 'hidden'
      document.body.style['max-height'] = '100vh'
    }
  }
  componentWillUnmount(){
    if(this.props.mobile){
      document.body.style.overflow = '';
      document.body.style['max-height'] = ''
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.volume != this.props.volume){
      this.props.multiPlayer.volume.value = nextProps.volume;
    }
  }
  render(){
    const { 
      active, 
      steps, 
      instruments, 
      instrument, 
      tempo, 
      paused, 
      sequences, 
      multiPlayer, 
      updateState,
      volume,
      mobile 
    } = this.props
    return (
      <header id="sequencer" className={cn('container', {active})}>
        <Sequencer 
          mobile={mobile}
          tempo={tempo}
          paused={paused} 
          steps={steps} 
          sequence={sequences[instruments[instrument]]}
          onIncrement={(time, index) => {
            for(let k in this.props.sequences){
              if(this.props.sequences[k][index]){
                multiPlayer.get(k).start(time, 0)
                if(k == 'CH' && multiPlayer.get('OH').state == 'started'){
                  multiPlayer.get('OH').stop(time)
                }
              }
            }
          }}
          onButtonPress={(index) => {
            const selInst = this.props.instruments[this.props.instrument];
            let arr = this.props.sequences[selInst].slice(0);
            arr[index] = !arr[index];
            let newSeq = {
              ...this.props.sequences,
              [selInst]: arr
            }
            updateState({sequences: newSeq});
            localStorage.setItem('sequences', JSON.stringify(newSeq))
          }}
        />
        <div className={cn('control-panel', {['flex-row']: !mobile, ['flex-column']: mobile})}>
          {!mobile && (
            <div style={{marginRight: 30, display: 'flex'}}>
              <Knob
                onChange={volume => {
                  updateState({volume: volume})
                  throttle(() => localStorage.setItem('volume', volume), 750)()
                }}
                min={-60}
                max={1}
                degrees={270}
                size={50}
                flat
                value={volume}
                label="Volume"
              />
              <Knob
                onChange={tempo => {
                  updateState({tempo})
                  throttle(() => localStorage.setItem('tempo', tempo), 750)()
                }}
                min={20}
                max={280}
                degrees={270}
                size={50}
                flat
                value={tempo}
                label="Tempo"
              />
            </div>
          )}
          {mobile ? (
            <div className="flex-row align-center">
              <Knob
                onChange={volume => {
                  updateState({volume: volume})
                  throttle(() => localStorage.setItem('volume', volume), 750)()
                }}
                min={-60}
                max={1}
                degrees={270}
                size={50}
                flat
                value={volume}
                label="Volume"
              />
              <Knob 
                onChange={(instrument) => updateState({instrument})} 
                ticks={instruments}
                min={0}
                max={instruments.length-1}
                degrees={360}
                size={70}
                value={instrument}
              />
              <Knob
                onChange={tempo => {
                  updateState({tempo})
                  throttle(() => localStorage.setItem('tempo', tempo), 750)()
                }}
                min={20}
                max={280}
                degrees={270}
                size={50}
                flat
                value={tempo}
                label="Tempo"
              />
            </div>
          ) : (
            <Knob 
              onChange={(instrument) => updateState({instrument})} 
              ticks={instruments}
              min={0}
              max={instruments.length-1}
              degrees={360}
              size={70}
              value={instrument}
            />
          )}

          {!mobile && (
            <Fragment>
              <div style={{marginLeft: 60}}>
                <Button 
                  big
                  label="Start/Stop"
                  enabled={!paused}
                  onClick={() => updateState({paused: !paused})}
                />
              </div>
              <div style={{marginLeft: 30}}>
                <Button 
                  alert
                  label="Clear"
                  onClick={() => {
                    const emptySeq = this.genEmptySeq();
                    updateState({sequences: emptySeq})
                    localStorage.setItem('sequences', JSON.stringify(emptySeq))
                  }}
                />
              </div>
            </Fragment>
          )}
          {mobile && (
            <div className="flex-row align-center" style={{marginTop: 30}}>
              <Button 
                big
                label="Start/Stop"
                enabled={!paused}
                onClick={() => updateState({paused: !paused})}
              />
              <Button 
                alert
                big
                label="Clear"
                onClick={() => {
                  const emptySeq = this.genEmptySeq();
                  updateState({sequences: emptySeq})
                  localStorage.setItem('sequences', JSON.stringify(emptySeq))
                }}
              />
            </div>
          )}
        </div>
        <style jsx>{styles}</style>
      </header>
    )
  }
}

DJ808 = ActivableRenderer({delay: 800})(DJ808)

export default class Wrapper extends Component {
  constructor(props){
    super(props);
    let instruments = ['BD', 'SD', 'LT', 'MT', 'HT', 'RS', 'CP', 'CB', 'CY', 'OH', 'CH']
    
    const defaultSequences = () => {
      let output = {}
      for (let i = 0; i < instruments.length; i++) {
        let seq = [];
        for (let j = 0; j < props.steps; j++) {
          seq.push(Math.random() > .8)
        }
        output[instruments[i]] = seq;
      }
      return output;
    }

    let sequences = localStorage.getItem('sequences')
    sequences = sequences ? JSON.parse(sequences) : defaultSequences();
    let tempo = localStorage.getItem('tempo') || 126
    let volume = localStorage.getItem('volume') || 1
    this.state = {
      instrument: 10,
      instruments,
      tempo,
      volume,
      paused: true,
      sequences
    }
    let samples = {};
    for (let i = 0; i < instruments.length; i++) {
      samples[instruments[i]] = `/static/sounds/${instruments[i]}.wav`
    }
    this.multiPlayer = new Tone.Players(samples).toMaster();
    Tone.Master.volume.value = volume;
  }

  componentWillUnmount(){
    this.multiPlayer.dispose();
  }

  render(){
    return (
      <DJ808 
        {...this.props} 
        {...this.state}
        multiPlayer={this.multiPlayer}
        updateState={state => this.setState(state)}
      />
    )
  }
}

Wrapper.defaultProps = {
  active: false,
  steps: 16, 
  tempo: 120
}