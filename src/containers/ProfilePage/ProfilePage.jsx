import React, { Component } from 'react';
import styles from './ProfilePage.module.scss';
import Button from '../../components/UI/Button/Button';
import { NavLink } from 'react-router-dom';

export class ProfilePage extends Component {
    render() {
        return (
            <main className={styles.ProfilePage}>
                <h1>
                    My Cabinet
                </h1>
                <Button>
                    Update
                </Button>
            </main>
            
        );
    }
}
export default ProfilePage;
