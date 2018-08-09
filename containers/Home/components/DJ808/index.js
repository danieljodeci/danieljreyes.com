import React, {Component} from 'react'
import styles from '../../styles/sequencer'
import Knob from './Knob';
import Button from './Button'
import Sequencer from './Sequencer'
import ActivableRenderer from '../../../../hocs/ActivableRenderer';
import cn from 'classnames';

class DJ808 extends Component {
  constructor(props){
    super(props);
    let arr = []
    for (let i = 0; i < props.steps; i++) {
      arr.push(false)
    }
    this.state = {
      instrument: 10,
      instruments: ['BD', 'SD', 'LT', 'MT', 'HT', 'RS', 'CP', 'CB', 'CY', 'OH', 'CH'],
      tempo: 150,
      paused: true,
      sequences: {
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
      }
    }
  }

  render(){
    const { active, steps } = this.props
    const { instruments, instrument, tempo, paused, sequences } = this.state
    return (
      <section className={cn('container', {active})}>
        <Sequencer 
          tempo={tempo}
          paused={paused} 
          steps={steps} 
          sequence={sequences[instruments[instrument]]}
          onButtonPress={(index) => {
            const selInst = instruments[instrument];
            let arr = sequences[selInst].slice(0);
            arr[index] = !arr[index];
            this.setState({
              sequences: {
                ...sequences,
                [selInst]: arr
              }
            });
          }}
        />
        <div className="flex-row control-panel">
          <Knob
            onChange={(tempo => this.setState({tempo}))}
            min={20}
            max={280}
            degrees={270}
            size={50}
            flat
            value={tempo}
            label="Tempo"
          />
          <Knob 
            onChange={(instrument) => this.setState({instrument})} 
            ticks={instruments}
            min={0}
            max={instruments.length-1}
            degrees={360}
            value={instrument}
          />
          <Button 
            big
            label="Start/Stop"
            enabled={!paused}
            onClick={() => this.setState({paused: !paused})}
          />
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

export default ActivableRenderer({delay: 800})(DJ808)