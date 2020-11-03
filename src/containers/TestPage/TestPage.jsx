import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TestPage.module.scss';
import Button from '../../components/UI/Button/Button';

const { REACT_APP_API: api } = process.env;

export class TestPage extends Component {
    state = {
        testMaterials: [],
        nextTestMaterialNumber: null,
        currentNumber: null
    };

    componentDidMount() {
        const { courseId, testNumber } = this.props.match.params;

        fetch(`${api}/courses/${courseId}?testPopulate=true`)
            .then((result) => result.json())
            .then((response) => {
                console.log(response);
                const updatedState = {};

                const fetchedTest = response.data.doc.materials.tests[testNumber - 1];
                updatedState.testMaterials = fetchedTest.test.split('\\n');
                updatedState.currentNumber = parseInt(testNumber);

                if (response.data.course.materials.tests.length > testNumber) {
                    updatedState.nextTestMaterialNumber = parseInt(testNumber) + 1;
                }

                this.setState(updatedState);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        const formattedTest = this.state.testMaterials.map((part, i) => <p key={i}>{part}</p>);
        let nextButton = (
            <Link to="/courses/:courseId/video/:videoNumber">
                <Button>Go to videos</Button>
            </Link>
        );
        let backButton = (
            <Link to={this.props.match.url.substring(0, this.props.match.url.indexOf('test'))}>
                <Button>Back to course page</Button>
            </Link>
        );

        if (this.state.nextTestMaterialNumber) {

            const redirectLink =
                this.props.match.url.slice(0, this.props.match.url.lastIndexOf('/') + 1) +
                this.state.nextTestMaterialNumber; 

            nextButton = (
                <Link
                    to={redirectLink}
                    onClick={() => {
                        setTimeout(() => {
                            window.location.reload()
                        }, 200); 
                    }}
                >
                    <Button>Next</Button>
                </Link>
            );
        }

        if (this.state.currentNumber !== 1) {

            const redirectLink =
                this.props.match.url.slice(0, this.props.match.url.lastIndexOf('/') + 1) +
                (this.state.currentNumber - 1);

            console.log(redirectLink);

            backButton = (
                <Link
                    to={redirectLink}
                    onClick={() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 200);
                    }}
                >
                    <Button>Previous</Button>
                </Link>
            );
        }

        return (
            <div className={styles.TestPage}>
                <div className="center-content">
                    <h2>Test {this.state.currentNumber}</h2>
                    {formattedTest}
                </div>
                <div className="center-content">
                    <div className={styles.Footer}>
                        {backButton}
                        {nextButton}
                    </div>
                </div>
            </div>
        );
    }
}

export default TestPage;
