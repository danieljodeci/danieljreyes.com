import React, {Component} from 'react'
import Led from './Led'
import styles from '../../styles/sequencer'
import cn from 'classnames'

export default class Button extends Component {
  render(){
    const { active, onClick, enabled, big, label } = this.props
    return (
      <button className={cn('button', {active, enabled, big})} onClick={onClick}>
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