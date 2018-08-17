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

    // Set up sequencer
    this.sequencer = new Tone.Sequence((time, value) => {
      const i = position[Tone.Transport.position.slice(0, 5)]
      this.props.onIncrement(time, value, i)
    }, this.props.sequence, '16n');
    this.sequencer.start();
    this.sequencer.loop = true;

    // Set up transport
    Tone.Transport.setLoopPoints(0, '1m')
    Tone.Transport.loop = true;
    this.tickEventId = Tone.Transport.scheduleRepeat(this.updateIndex, '16n');
    Tone.Transport.bpm.value = this.props.tempo;
  }

  componentDidMount(){
    this._mounted = true;
    if(!this.props.paused) Tone.Transport.start('+0.25');
  }

  componentWillUnmount(){
    this._mounted = false;
    Tone.Transport.stop()
    Tone.Transport.cancel(this.tickEventId);
    this.sequencer.dispose();
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
    if(!this._mounted) return;
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