import React, { Component } from 'react'
import styles from './Mainpage.module.scss';
import Course from '../../components/Course/Course';

export class Mainpage extends Component {
    render() {
        return (
            <main className={styles.Mainpage}>
                Mainpage content
                <Course /><Course /><Course /><Course />
            </main>
        );
    }
}

export default Mainpage
