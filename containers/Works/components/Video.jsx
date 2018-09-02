// Core
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// Components
import { IoMdPlay } from 'react-icons/io'

// CSS
import styles from '../styles/video';

export default class Video extends PureComponent {
  state = {
    paused: false,
    loading: false,
    body: [(
      <div key={0} id="thumbnail" style={{
        backgroundImage: `url(${this.props.thumbnail})`
      }}>
        <style jsx>{styles}</style>
      </div>
    )]
  }

  componentDidMount() {
    this.onPlay();
  }

  componentWillUpdate(nextProps){
    let videoPlayer = document.getElementById('video-player')
    Object.keys(nextProps).map(key => {
      if(!['src', 'autoPlay', 'playsInline', 'muted', 'loop'].includes(key)) return;
      if(nextProps[key] != this.props[key]){
        videoPlayer[key] = nextProps[key];
      }
    })
  }

  componentWillUnmount(){
    let videoPlayer = document.getElementById('video-player')
    if(videoPlayer) videoPlayer.removeEventListener('play', this.removeThumbnail);
  }

  onPlay = () => {
    console.log('onPlay')
    const { src, autoPlay, playsInline, muted, loop, delay, className } = this.props;
    const { body } = this.state;

    let videoPlayer = document.getElementById('video-player')
    if(videoPlayer) {
      return videoPlayer.play()
      .then(() => {
        console.log('Video playing from ux')
        this.setState({paused: false})
      })
      .catch((error) => {
        console.log('Error playing video from ux: ', error)
          this.setState({paused: true})
      });
    }
    
    let video = (
      <video key={1} id="video-player" 
        loop={loop} 
        autoPlay={autoPlay} 
        muted={muted} 
        playsInline={playsInline}
        preload="metadata">
        <source type="video/mp4" src={src} />
        <style jsx>{styles}</style>
      </video>
    )

    console.log('Inserting video')
    this.refs['video-container'].className += ` incoming-video`;
    this.setState({body: [...body, video]}, () => {
      // If video isn't already playing, trigger play action
      videoPlayer = document.getElementById('video-player');
      // console.log({videoPlayer})
      if(videoPlayer.paused){
        console.log('Video player is paused')
        videoPlayer.play()
        .then(() => {
          console.log('Video playing')
          this.setState({paused: false})
        })
        .catch((error) => {
          console.log('Error playing video: ', error)
          this.setState({paused: true})
        });
      }
      
      // videoPlayer.addEventListener('error', (e) => console.log('Error event: ', e.target.error));

      // Listen on when video is buffered and fade out thumbnail
      videoPlayer.addEventListener('play', this.removeThumbnail)
    })
  }

  removeThumbnail = () => {
    console.log('Video started playing')
    // Return if we have already remove the thumbnail from the DOM
    if(!document.getElementById('thumbnail')) return console.log('could not find thumbnail');
    setTimeout(() => {
      this.refs['video-container'].className += ` fade-out`
    }, this.props.delay)
    setTimeout(() => {
      console.log('Removing thumbnail')
      this.setState({body: this.state.body.slice(1)})
      this.refs['video-container'] = this.props.className;
    }, this.props.delay + 1000)
  }

  render() {
    const { className } = this.props;
    const { paused, body } = this.state;
    return (
      <div ref="video-container" className={className}>
        {body.map(el => el)}
        {paused && (
          <button onClick={this.onPlay}>
            <IoMdPlay />
          </button>
        )}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  style: PropTypes.object,
  delay: PropTypes.number,
}

Video.defaultProps = {
  autoPlay: true,
  playsInline: true,
  muted: true,
  loop: true,
  delay: 2000,
  controls: false,
  className: 'video-container'
}
