import React from 'react'
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';
import HeaderLogo from '../../img/HeaderLogo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <NavLink to="/" className={styles.HeaderImage}>
                <img src={HeaderLogo} alt="logo" className={styles.HeaderImg}></img>
            </NavLink>
            <div className={styles.AuthSection}>
                <NavLink to="/profile">
                        <Button>Profile</Button>
                </NavLink>
            </div>
            <div className={styles.AuthSection}>
                <NavLink to="/signUp">
                    <Button>Sign up</Button>
                </NavLink>
            </div>
            <div className={styles.AuthSection}>
                <NavLink to="/courses/:courseId/review">
                    <Button>Test</Button>
                </NavLink>
            </div>
            <div className={styles.AuthSection}>
                <NavLink to="/courses/:courseId/topic">
                    <Button>Topic</Button>
                </NavLink>
            </div>
        </header>
    );
}

export default Header