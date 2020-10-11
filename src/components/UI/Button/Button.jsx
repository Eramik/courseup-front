import React from 'react'
import styles from './Button.module.scss'; 

const Button = (props) => {
    return (
        <button className={styles.Button} style={{
            
        }}>
            {props.children}
        </button>
    );
}

export default Button
