import React, {Component, Fragment} from 'react'
import styles from '../../styles/sequencer'
import Button from './Button';
import Tone from 'tone';
import position from '../../../../config/position';

class Sequencer extends Component {
  constructor(props){
    super(props);

    this.state = {
      index: 0
    }

    this.sequencer = new Tone.Sequence((time, value) => {
      const i = position[Tone.Transport.position.slice(0, 5)]
      this.props.onIncrement(time, value, i)
    }, this.props.sequence, '16n');
    this.sequencer.start();
    this.sequencer.loop = true;
    Tone.Transport.setLoopPoints(0, '1m')
    Tone.Transport.loop = true;
    Tone.Transport.scheduleRepeat(this.updateIndex, '16n');
    Tone.Transport.bpm.value = this.props.tempo;
    Tone.Master.volume.value = 1;
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

  updateIndex = () => {
    this.setState({ index: position[Tone.Transport.position.slice(0, 5)] });
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
          onClick={() => onButtonPress(i)}
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