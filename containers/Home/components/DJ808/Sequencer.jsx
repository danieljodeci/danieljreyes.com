import React, {Component, Fragment} from 'react'
import styles from '../../styles/sequencer'
import Button from './Button';

class Sequencer extends Component {
  state = {
    index: 0,
  }

  componentDidMount() {
    const { tempo, paused, steps } = this.props 
    const component = this;
    if(paused) return;
    this.counter = setInterval(() => {
      const { index } = component.state;
      this.setState({index: (index + 1) % steps})
    }, 60000 / tempo / 4)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.tempo != nextProps.tempo){
      const component = this;
      const { steps, tempo } = nextProps;
      clearInterval(this.counter)
      this.counter = setInterval(() => {
        const { index } = component.state;
        this.setState({index: (index + 1) % steps})
      }, 60000 / tempo / 4)
    }
    if(this.props.paused != nextProps.paused){
      if(nextProps.paused) {
        clearInterval(this.counter)
      }else{
        const component = this;
        const { steps, tempo } = nextProps;
        this.counter = setInterval(() => {
          const { index } = component.state;
          this.setState({index: (index + 1) % steps})
        }, 60000 / tempo / 4)
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.counter);
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
  onButtonPress: () => null
}

export default Sequencer