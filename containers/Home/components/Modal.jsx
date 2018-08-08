import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modal';

import Portal from '../../../hocs/Portal'
import ActivableRenderer from '../../../hocs/ActivableRenderer'

class Modal extends Component {

  componentDidMount() {
    const { active } = this.props;
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (active) {
      document.body.style.overflow = 'hidden'
      document.body.style['max-height'] = '100vh'
    };
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
    document.body.style['max-height'] = ''
    window.scrollTo(0, this.scrollTop);
  }

  componentWillUpdate(nextProps) {
    const becomingActive = nextProps.active && !this.props.active;
    const becomingUnactive = !nextProps.active && this.props.active;
    if (becomingActive) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => document.body.style['max-height'] = '100vh', this.props.delay);
    }

    if (becomingUnactive && !document.querySelectorAll('[data-id="overlay"]')[1]) {
      document.body.style.overflow = '';
      document.body.style['max-height'] = ''
      window.scrollTo(0, this.scrollTop);
    }
  }
  
  render() {
    const { active, onToggleModal } = this.props
    return (
      <Portal className='wrapper'>
        <div className={active ? 'modal active' : 'modal'} data-id="overlay">
          <div className={'body'}>
            {this.props.children}
          </div>
        </div>
        <style jsx>{styles}</style>
      </Portal>
    )
  }
}

Modal.defaultProps = {
  active: false,
  onToggleModal: () => null,
  delay: 500
};

export default ActivableRenderer()(Modal)