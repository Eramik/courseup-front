import React from 'react'
import styles from './Reason.module.scss'; 

const Reason = (props) => {
    return (
        <figure className={styles.Reason}>
            {props.children}
        </figure>
    );
}

export default Reason