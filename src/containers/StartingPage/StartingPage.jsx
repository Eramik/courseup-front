import React, { Component } from 'react'
import styles from './StartingPage.module.scss';
import Button from '../../components/UI/Button/Button';
import Reason from '../../components/Reason/Reason';
import { NavLink } from 'react-router-dom';


export class StartingPage extends Component {
    render() {
        return (
            <main className={styles.StartingPage}>
                <div className={styles.StartingPage}>
                    <h1 className={styles.Text}>CourseUp - your path to success!</h1>
                    <div style={{top: "43%", left: "40%", position: "absolute"}}>
                        <NavLink to="/courses">
                            <Button>Go to courses</Button>
                        </NavLink>
                    </div>
                </div>
                <h1 className={styles.TextWhy}>Why should you choose us?</h1>
                <div className={styles.ReasonContainer}>
                    <Reason>Тест Тест Тест.Тест.Тест.Тест Тест.Тест. Тест.Тест Тест.Тест. Тест.Тест Тест.Тест. Тест.Тест</Reason>
                    <Reason>Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест</Reason>
                    <Reason>Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест.Тест</Reason>                   
                </div>
            </main>
        );
    }
}
export default StartingPage