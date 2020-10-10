import React from 'react'
import styles from './Reason.module.scss'; 

const Reason = (props) => {
    return (
        <div  className={styles.Reason}>
            {props.children}
        </div>
    );
}

export default Reason
