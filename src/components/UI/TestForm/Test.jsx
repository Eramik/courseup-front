import React from 'react';
import styles from './Test.module.scss';

const Test = (props) => (
    <div style={{...props.style}} className={clsx(styles.Test)}>
        {props.children}
    </div>
);

export default Test;