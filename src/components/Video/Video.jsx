import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';

const ResponsivePlayer = (props) => {
    return (
      <div className={styles.Video}>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={props.url}
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      </div>
    )
  }
export default ResponsivePlayer