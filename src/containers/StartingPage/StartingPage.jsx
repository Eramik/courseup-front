import React, { Component } from 'react'
import styles from './StartingPage.module.scss';
import Button from '../../components/UI/Button/Button';

export class StartingPage extends Component {
    render() {
        return (
            <main className={styles.StartingPage}>
                Starting pageee
                <Button />
            </main>
        );
    }
}

export default StartingPage
