import React from 'react'
import styles from './HeaderImg.module.scss';
import LogoHeader from '../../../img/HeaderImg.png';

const HeaderImg = (props) => {
    return (
        <img src={LogoHeader} alt="logo" className={styles.HeaderImg}></img>
    );
}

export default HeaderImg