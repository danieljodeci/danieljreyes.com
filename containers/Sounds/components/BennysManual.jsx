import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';
import Fade from 'react-reveal/Fade';

export default class BennysManual extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={0}>
        <figure className="project">
          <Fade>
            <iframe style={{border: 0, width: '100%', height: 'auto', minHeight: 435}} src="https://bandcamp.com/EmbeddedPlayer/album=2626318024/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://pascualfuentes.bandcamp.com/album/bennys-manual">BENNY&#39;S MANUAL by Maxwell Genders &amp; Pascual Fuentes</a></iframe>
          </Fade>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}