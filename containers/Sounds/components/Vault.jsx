import React, {Component} from 'react'
import styles from '../styles/sounds'
import Parallax from 'react-rellax';

export default class Vault extends Component {
  render(){
    return (
      <Parallax className="project-section" speed={0}>
        <figure className="project">
          <iframe style={{border: 0, width: '100%', height: 'auto', minHeight: 435}} src="https://bandcamp.com/EmbeddedPlayer/album=2710222291/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="http://vault-i.bandcamp.com/album/sketches">sketches by vault</a></iframe>
        </figure>
        <style jsx>{styles}</style>
      </Parallax>
    )
  }
}