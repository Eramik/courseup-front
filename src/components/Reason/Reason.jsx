import React from 'react'
import styles from './Reason.module.scss'; 

const Reason = (props) => {

    const { heading, mainText } = props;

    return (
        <figure className={styles.Reason}>
            <h3>{heading}</h3>
            <p>{mainText}</p>
        </figure>
    );
}

export default Reason