import React, {Component, Fragment} from 'react'
import styles from '../../styles/sequencer'
import Button from './Button';
import Tone from 'tone';

class Sequencer extends Component {
  constructor(props){
    super(props);

    this.state = {
      index: 0
    }

  }

  componentDidMount(){
    this._mounted = true;

    // Create our sequence values
    let evts = [];
    for (let i = 0; i < this.props.steps; i++) {
      evts.push(i)
    }

    // Set up transport
    this.loop = new Tone.Sequence(this.updateIndex, evts, "16n");
    Tone.Transport.bpm.value = 120;
    Tone.Transport.start();
    if(!this.props.paused) this.loop.start('+0.25');

    // Start the AudioContext
    var context = Tone.context;
    var buffer = context.createBuffer(1, 1, context.sampleRate)
		var source = context.createBufferSource()
		source.buffer = buffer
		source.connect(context.destination)
		source.start(0)

		// resume the audio context
		if (context.resume){
			context.resume()
		}
  }

  componentWillUnmount(){
    this._mounted = false;
    Tone.Transport.stop();
    this.loop.dispose();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.tempo != nextProps.tempo){
      Tone.Transport.bpm.value = nextProps.tempo;
    }

    if(this.props.paused != nextProps.paused){
      if(nextProps.paused) {
        this.loop.stop();
      }else{
        Tone.Transport.start();
        this.loop.start('+0.25');
      }
    }
  }

  updateIndex = (time, index) => {
    if(!this._mounted) return;
    this.setState({ index });
    this.props.onIncrement(time, index)
  }

  generateButtons = () => {
    const { steps, sequence, onButtonPress, mobile } = this.props;
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
    if(!mobile) return buttons

    buttons = buttons.reduce((r, element, index) => {
      index % 4 === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, []).map((rowContent, i) => {
      return <div key={i} className="button-row-container">{rowContent}
      <style jsx>{styles}</style></div>
    })

    return buttons;
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