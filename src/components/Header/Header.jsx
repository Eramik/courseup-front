import React from 'react'
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';
import HeaderImg from './HeaderImg/HeaderImg';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <HeaderImg />
            <Button top="2rem" left="135rem">Sign up</Button>
        </header>
    );
}

export default Header