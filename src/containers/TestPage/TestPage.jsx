import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TestPage.module.scss';
import Button from '../../components/UI/Button/Button';

const { REACT_APP_API: api } = process.env;

export class TestPage extends Component {
    state = {
        testMaterials: []
    };

    componentDidMount() {
        const { courseId } = this.props.match.params;

        fetch(`${api}/courses/${courseId}?testsPopulate=true`)
            .then((result) => result.json())
            .then((response) => {
                console.log(response);
                const fetchedTestMaterials = response.data.doc.materials.tests[0].questions;

                this.setState({ testMaterials: fetchedTestMaterials });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
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

        let questions = null;
        if (this.state.testMaterials.length > 0) {
            questions = this.state.testMaterials.map((question, questionIndex) => {
                let renderedVariants = null;

                if (question.type !== 'input') {
                    renderedVariants = question.variants.map((variant, variantIndex) => {
                        const name = `variant-${questionIndex}-${variantIndex}`;
                        if (question.type === 'radio') {
                            return (
                                <div>
                                    <input
                                        className={styles.input}
                                        type="radio"
                                        name={name}
                                        value={variant}
                                    />
                                    <label for={name}>{variant}</label>
                                </div>
                            );
                        } else if (question.type === 'checkbox') {
                            return (
                                <div>
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                        name={name}
                                        value={variant}
                                    />
                                    <label for={name}>{variant}</label>
                                </div>
                            );
                        }
                    });
                } else {
                    renderedVariants = <input type="text" placeholder="Enter your answer" />;
                }

                return (
                    <div className={styles.Question} data-id={question._id}>
                        <h3>{questionIndex + 1}. {question.question}</h3>
                        {renderedVariants}
                    </div>
                );
            });
        }

        return (
            <div className={styles.TestPage}>
                <div className="center-content">
                    <h2>Test {this.state.currentNumber}</h2>
                    <div className={styles.QuestionsContainer}>
                        {questions}
                    </div>
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
