import React, { Component } from 'react';

// CSS
import styles from '../styles/modal';
import cn from 'classnames'

// HOC
import Portal from '../../../hocs/Portal'
import ActivableRenderer from '../../../hocs/ActivableRenderer'

// Components
import { IoIosClose } from 'react-icons/io'

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
    const { active, onToggleModal, horizontal } = this.props
    return (
      <Portal className='wrapper'>
        <div className={cn('modal', {active, horizontal})} data-id="overlay">
          {onToggleModal && (
            <div className="close-container">
              <button onClick={onToggleModal}>
                <IoIosClose />
              </button>
            </div>
          )}
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
  delay: 800
};

export default ActivableRenderer()(Modal)