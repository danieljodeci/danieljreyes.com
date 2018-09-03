import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';
import Fade from 'react-reveal/Fade';

export default class Bombses extends Component {
  render(){
    const { mobile, tablet } = this.props
    return (
      <Parallax className="project-section" speed={mobile || tablet ? 0 : -1}>
        <figure className="project">
          <Fade>
            <iframe style={{border: 0, width: '100%', height: 'auto', minHeight: 435}} src="https://bandcamp.com/EmbeddedPlayer/album=3590465581/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="http://pascualfuentes.bandcamp.com/album/bombses">Bombses by Pascual Fuentes</a></iframe>
          </Fade>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}