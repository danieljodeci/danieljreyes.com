import React, {PureComponent} from 'react';
import p5 from 'p5'

const P5Wrapper = () => (sketch) => {

  class P5HOC extends PureComponent {

    componentDidMount() {
      this.canvas = new p5(this.props.sketch, this.wrapper);
      if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
        this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
      }
    }
  
    componentWillReceiveProps(newprops) {
      if(this.props.sketch !== newprops.sketch){
        this.wrapper.removeChild(this.wrapper.childNodes[0]);
        this.canvas = new p5(newprops.sketch, this.wrapper);
      }
      if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
        this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
      }
    }
  
    render() {
      return <div id="p5" ref={wrapper => this.wrapper = wrapper}></div>;
    }
  }

  return () => <P5HOC sketch={sketch} />
}

export default P5Wrapper
