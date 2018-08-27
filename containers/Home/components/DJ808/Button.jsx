import React, {Component} from 'react'
import Led from './Led'
import styles from '../../styles/sequencer'
import cn from 'classnames'

export default class Button extends Component {
  render(){
    const { 
      active, 
      enabled, 
      big, 
      label, 
      alert, 
      onClick, 
      primary,
      secondary, 
      tertiary 
    } = this.props

    return (
      <button className={cn('button', {active, enabled, big, alert, primary, secondary, tertiary })} 
        onMouseDown={onClick}
        onMouseEnter={(e) => e.buttons == 1 || e.buttons == 3 ? onClick() : null}
      >
        <section>
          <Led active={active} enabled={enabled} />
          <div />
        </section>
        {label && label.length ? <label>{label}</label> : null}
        <style jsx>{styles}</style>
      </button>
    )
  }
}

Button.defaultProps = {
  active: false,
  enabled: false,
  big: false,
  onClick: () => null
}