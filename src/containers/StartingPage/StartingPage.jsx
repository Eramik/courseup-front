import React, { Component } from 'react';
import styles from './StartingPage.module.scss';
import Button from '../../components/UI/Button/Button';
import Reason from '../../components/Reason/Reason';
import { NavLink } from 'react-router-dom';

export class StartingPage extends Component {
    render() {
        const reasonElements = [
            {
                heading: 'Highest level courses, supplemented with video materials',
                mainText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                heading: 'Completely free',
                mainText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                heading: 'The ability to take several courses at the same time',
                mainText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
        ].map(reason => <Reason heading={reason.heading} mainText={reason.mainText} />);

        return (
            <main className={styles.StartingPage}>
                <section className={styles.InitialSection}>
                    <div className={styles.InfoCentered}>
                        <h1>CourseUp - your path to success!</h1>
                        <NavLink to="/courses">
                            <Button>Go to courses</Button>
                        </NavLink>
                    </div>
                </section>
                <section className={styles.SectionReasons}>
                    <h2>Why should you choose us?</h2>
                    <div className={styles.ReasonContainer}>
                        {reasonElements}
                    </div>
                </section>
            </main>
        );
    }
}
export default StartingPage;
