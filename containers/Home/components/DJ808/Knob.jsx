import React, {Component} from 'react'
import styles from '../../styles/sequencer'
import cn from 'classnames'

export default class Knob extends Component {
  constructor(props) {
    super(props);
    this.fullAngle = props.degrees;
    this.startAngle = (360 - props.degrees) / 2;
    this.endAngle = this.startAngle + props.degrees;
    this.margin = props.size * 0.15;
    this.currentDeg = Math.floor(
      this.convertRange(
        props.min,
        props.max,
        this.startAngle,
        this.endAngle,
        props.value
      )
    )
    this.state = { 
      deg: this.currentDeg 
    }
  }

  convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
    return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
  };

  startDrag = e => {
    e.preventDefault();
    const knob = e.target.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2
    };

    const moveHandler = e => {
      this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
      if (this.currentDeg === this.startAngle) this.currentDeg--;
      let newValue = Math.floor(
        this.convertRange(
          this.startAngle,
          this.endAngle,
          this.props.min,
          this.props.max,
          this.currentDeg
        )
      );
      this.setState({ deg: this.currentDeg });
      this.props.onChange(newValue);
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", e => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  getDeg = (cX, cY, pts) => {
    const { ticks } = this.props;
    const x = cX - pts.x;
    const y = cY - pts.y;
    let deg = Math.atan(y / x) * 180 / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }
    let finalDeg = Math.min(Math.max(this.startAngle, deg), this.endAngle);
    if(ticks.length) {
      const rounder = (360 / ticks.length)
      finalDeg = Math.ceil(finalDeg / rounder)*rounder;
    }
    return finalDeg;
  };

  dcpy = o => {
    return JSON.parse(JSON.stringify(o));
  };

  renderTicks = () => {
    const { ticks, size } = this.props;
    if(!ticks.length) return;
    let frags = 360 / ticks.length;
    let theta = [];
    for (let i = ticks.length-1; i >= 0; i--) {
      theta.push(((frags / 180) * i * Math.PI) - (Math.PI / 2));
    }

    return (
      <div className="ticks">
        {ticks.map((tick, i) => {
          const xpos = Math.round((size - 15) * (Math.cos(theta[i]))) + (size / 2) - 3 + 'px'
          const ypos = Math.round((size - 15) * (Math.sin(theta[i]))) - (size / 2) + 'px'
          return (
            <span key={i} style={{
              top: ((size / 2) - parseInt(ypos.slice(0, -2))) + 'px',
              left: ((size / 2) + parseInt(xpos.slice(0, -2))) + 'px'
            }}>{tick}</span>
          )
        })}
        <style jsx>{styles}</style>
      </div>
    )
  }

  render(){
    const { flat, size, label, ticks } = this.props;
    let knobStyle = this.dcpy({
      width: size,
      height: size,
    });
    knobStyle.transform = "rotate(" + this.state.deg + "deg)";
    if(ticks.length) knobStyle.margin = 50;
    let indicatorStyle = this.dcpy({
      width: size / 3,
      height: size,
    })
    let lineStyle = {height: size / 4}
    return (
      <section className="knob">
        {this.renderTicks()}
        <div onMouseDown={this.startDrag} style={knobStyle}>
          <div className={cn({flat})} style={indicatorStyle}>
            <span style={lineStyle} />
          </div>
        </div>
        {label && label.length ? <label>{label}</label> : null}
        <style jsx>{styles}</style>
      </section>
    )
  }
}

Knob.defaultProps = {
  size: 80,
  min: 0,
  max: 9,
  ticks: [],
  degrees: 360,
  value: 0,
  flat: false,
  onChange: () => null
};