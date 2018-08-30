import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';

export default class DisciplesOfSaturn extends Component {
  render(){
    const { mobile } = this.props
    return (
      <Parallax className="project-section" speed={mobile ? 0 : -1}>
        <figure className="project">
          <iframe style={{border: 0, width: 350, height: 470}} src="https://bandcamp.com/EmbeddedPlayer/album=267577387/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="http://msdos.bandcamp.com/album/msdos">MSDOS by disciples of saturn</a></iframe>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}