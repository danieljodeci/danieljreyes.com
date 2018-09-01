import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';
import Fade from 'react-reveal/Fade';

export default class DisciplesOfSaturn extends Component {
  render(){
    const { mobile } = this.props
    return (
      <Parallax className="project-section" speed={mobile ? 0 : -1}>
        <figure className="project">
          <Fade>
            <iframe style={{border: 0, width: '100%', height: 'auto', minHeight: 435}} src="https://bandcamp.com/EmbeddedPlayer/album=267577387/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="http://msdos.bandcamp.com/album/msdos">MSDOS by disciples of saturn</a></iframe>
          </Fade>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}