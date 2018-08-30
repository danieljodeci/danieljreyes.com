import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';

export default class Bombses extends Component {
  render(){
    const { mobile } = this.props
    return (
      <Parallax className="project-section" speed={mobile ? 0 : -1}>
        <figure className="project">
          <iframe style={{border: 0, width: 350, height: 470}} src="https://bandcamp.com/EmbeddedPlayer/album=3590465581/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="http://pascualfuentes.bandcamp.com/album/bombses">Bombses by Pascual Fuentes</a></iframe>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}