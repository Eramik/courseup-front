import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => (
    <button
        style={{ ...props.style }}
        className={clsx(styles.Button, { [styles.Big]: props.big })}
        {...props}
    >
        {props.children}
    </button>
);

export default Button;
