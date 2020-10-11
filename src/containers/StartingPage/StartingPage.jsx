import React, { Component } from 'react'
import styles from './StartingPage.module.scss';
import Button from '../../components/UI/Button/Button';
import Reason from '../../components/Reason/Reason';
// import StartingBackgroundImg from '../../components/StartingBackground/StartingBackgroundImg';

export class StartingPage extends Component {
    render() {
        return (
            <main className={styles.StartingPage}>
                {/* <StartingBackgroundImg /> */}
                <div style={{ top: '50%'}}>
                    <Button>↓ Go to courses ↓</Button>
                </div>
                <Reason>Наши курсы наиболее полные и так далее..</Reason>
                <Reason>Наши курсы наиболее полные и так далее..</Reason>
                <Reason>Наши курсы наиболее полные и так далее..</Reason>
            </main>
        );
    }
}
export default StartingPage

