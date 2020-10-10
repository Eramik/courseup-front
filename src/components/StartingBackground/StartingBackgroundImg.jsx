import React from 'react'
import styles from './StartingBackgroundImg.module.scss';
import BackgroundStartingPageImg from '../../img/BackgroundStartingPageImg.png';

const StartingBackgroundImg = (props) => {
    return (
        <img src={BackgroundStartingPageImg} alt="logo" className={styles.BackgroundStartingPageImg}></img>
    );
}

export default StartingBackgroundImg