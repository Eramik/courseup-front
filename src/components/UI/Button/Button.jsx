import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => (
    <button className={clsx(styles.Button, { [styles.Big]: props.big })}>
        {props.children}
    </button>
);

export default Button;
