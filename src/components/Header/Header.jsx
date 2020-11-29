import React from 'react'
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';
import HeaderLogo from '../../img/HeaderLogo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <NavLink to="/" className={styles.HeaderImage}>
                <img src={HeaderLogo} alt="logo" className={styles.HeaderImg}></img>
            </NavLink>
            {props.token && ([
                <div className={styles.AuthSection}>
                    <NavLink to="/profile">
                            <Button>Profile</Button>
                    </NavLink>
                </div>,
                <div className={styles.AuthSection}>
                  <NavLink to="/forum">
                      <Button>Forum</Button>
                  </NavLink>
                </div>
            ])}
            <div className={styles.AuthSection}>
                <NavLink to="/signUp">
                    <Button>Sign up</Button>
                </NavLink>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
};


export default connect(mapStateToProps)(Header);