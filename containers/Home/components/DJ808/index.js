import React, {Component} from 'react'
import styles from '../../styles/sequencer'
import Knob from './Knob';
import Button from './Button'
import Sequencer from './Sequencer'
import ActivableRenderer from '../../../../hocs/ActivableRenderer';
import cn from 'classnames';
import Tone from 'tone';

class DJ808 extends Component {
  render(){
    const { active, steps, instruments, instrument, tempo, paused, sequences, multiPlayer, updateState } = this.props
    return (
      <section className={cn('container', {active})}>
        <Sequencer 
          tempo={tempo}
          paused={paused} 
          steps={steps} 
          sequence={sequences[instruments[instrument]]}
          onIncrement={(time, value, index) => {
            for(let k in sequences){
              if(sequences[k][index]){
                multiPlayer.get(k).start(time, 0)
              }
            }
          }}
          onButtonPress={(index) => {
            const selInst = instruments[instrument];
            let arr = sequences[selInst].slice(0);
            arr[index] = !arr[index];
            let newSeq = {
              ...sequences,
              [selInst]: arr
            }
            updateState({sequences: newSeq});
            localStorage.setItem('sequences', JSON.stringify(newSeq))
          }}
        />
        <div className="flex-row control-panel">
          <Knob
            onChange={(tempo => updateState({tempo}))}
            min={20}
            max={280}
            degrees={270}
            size={50}
            flat
            value={tempo}
            label="Tempo"
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
          <div style={{marginLeft: 20}}>
            <Button 
              big
              label="Start/Stop"
              enabled={!paused}
              onClick={() => updateState({paused: !paused})}
            />
          </div>
          <div style={{marginLeft: 20}}>
            <Button 
              big
              label="Clear"
              onClick={() => updateState({sequences: {
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
              }})}
            />
          </div>
        </div>
        <style jsx>{styles}</style>
      </section>
    )
  }
}

DJ808.defaultProps = {
  active: false,
  steps: 16, 
  tempo: 120
}

DJ808 = ActivableRenderer({delay: 800})(DJ808)

export default class Wrapper extends Component {
  constructor(props){
    super(props);
    let instruments = ['BD', 'SD', 'LT', 'MT', 'HT', 'RS', 'CP', 'CB', 'CY', 'OH', 'CH']
    let arr = []
    for (let i = 0; i < props.steps; i++) {
      arr.push(Math.random() > .5)
    }

    let sequences = localStorage.getItem('sequences')
    sequences = sequences ? JSON.parse(sequences) : {
      BD: arr,
      SD: arr,
      LT: arr,
      MT: arr,
      HT: arr,
      RS: arr,
      CP: arr,
      CB: arr,
      CY: arr,
      OH: arr,
      CH: arr
    };
    
    this.state = {
      instrument: 10,
      instruments,
      tempo: 150,
      paused: true,
      sequences
    }
    let samples = {};
    for (let i = 0; i < instruments.length; i++) {
      samples[instruments[i]] = `/static/sounds/${instruments[i]}.wav`
    }
    this.multiPlayer = new Tone.Players(samples).toMaster();
    Tone.Master.volume.value = 1;
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