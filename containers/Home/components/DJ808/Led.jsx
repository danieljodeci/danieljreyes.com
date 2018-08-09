import React, {Component} from 'react'
import styles from '../../styles/sequencer'
import cn from 'classnames'

export default class Led extends Component {
  render(){
    const { active, enabled } = this.props
    return (
      <div className={cn('led', {active, enabled})}>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

Led.defaultProps = {
  active: false,
  enabled: false
}