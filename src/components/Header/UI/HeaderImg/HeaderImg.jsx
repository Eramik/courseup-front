import React from 'react'
import styles from './HeaderImg.module.scss'; 

const HeaderImg = (props) => {
    return (
        <img src="./public/HeaderImg.png" alt="lorem" className={styles.HeaderImg}></img>
    );
}

export default HeaderImg