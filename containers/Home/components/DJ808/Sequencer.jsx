import React, {Component, Fragment} from 'react'
import styles from '../../styles/sequencer'
import Button from './Button';
import Tone from 'tone';
import position from '../../../../utils/position';

class Sequencer extends Component {
  constructor(props){
    super(props);

    this.state = {
      index: 0
    }

    // Set up transport
    Tone.Transport.setLoopPoints(0, '1m')
    Tone.Transport.loop = true;
    this.tickEventId = Tone.Transport.scheduleRepeat(this.updateIndex, '16n');
    Tone.Transport.bpm.value = props.tempo;
  }

  componentDidMount(){
    this._mounted = true;
    if(!this.props.paused) Tone.Transport.start('+0.25');
  }

  componentWillUnmount(){
    this._mounted = false;
    Tone.Transport.stop()
    Tone.Transport.cancel(this.tickEventId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.tempo != nextProps.tempo){
      Tone.Transport.bpm.value = nextProps.tempo;
    }

    if(this.props.paused != nextProps.paused){
      if(nextProps.paused) {
        Tone.Transport.stop()
      }else{
        Tone.Transport.start('+0.25')
      }
    }
  }

  updateIndex = (time) => {
    if(!this._mounted) return;
    const index = position[Tone.Transport.position.slice(0, 5)]
    this.setState({ index });
    this.props.onIncrement(time, index)
  }

  generateButtons = () => {
    const { steps, sequence, onButtonPress } = this.props;
    const { index } = this.state;
    let buttons = [];
    for (let i = 0; i < steps; i++) {
      buttons.push(
        <Button 
          key={i} 
          active={index == i} 
          enabled={sequence[i]}
          alert={i >= 4 && i <= 7} 
          secondary={i >= 8 && i <= 11} 
          tertiary={i >= 12 && i <= 15} 
          onClick={() => {
            onButtonPress(i);
          }}
        />)
    }
    return buttons
  }

  render(){
    return (
      <div className="sequencer">
        <Fragment>
          {this.generateButtons()}
        </Fragment>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

Sequencer.defaultProps = {
  steps: 16, 
  paused: true,
  tempo: 120,
  sequence: [],
  onIncrement: () => null,
  onButtonPress: () => null
}

export default Sequencer