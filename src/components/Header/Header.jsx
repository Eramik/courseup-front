import React from 'react'
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';
import HeaderImg from './HeaderImg/HeaderImg';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <HeaderImg />
            <div style={{top:"3%", left:"89%", position: "absolute"}}>
                <Button>Sign up</Button>
            </div>
        </header>
    );
}

export default Header