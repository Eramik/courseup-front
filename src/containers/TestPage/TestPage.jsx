import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TestPage.module.scss';
import Button from '../../components/UI/Button/Button';

const { REACT_APP_API: api } = process.env;

export class TestPage extends Component {
    state = {
        testMaterials: [],
        score: 0,
        showResults: false
    };

    componentDidMount() {
        const { courseId } = this.props.match.params;

        fetch(`${api}/courses/${courseId}?testsPopulate=true`)
            .then((result) => result.json())
            .then((response) => {
                const fetchedTestMaterials = response.data.doc.materials.tests[0].questions;

                this.setState({ testMaterials: fetchedTestMaterials });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    setTestMaterialValue = (type, id, value) => {
        const updatedTestMaterials = [...this.state.testMaterials];
        const questionIndex = updatedTestMaterials.findIndex((testMaterial) => testMaterial._id === id);

        if (questionIndex === -1) return;

        switch (type) {
            case 'radio':
            case 'input':
                updatedTestMaterials[questionIndex].chosenAnswer = value;
                break;
            case 'checkbox':
                if (
                    updatedTestMaterials[questionIndex].chosenAnswers &&
                    Array.isArray(updatedTestMaterials[questionIndex].chosenAnswers)
                ) {
                    updatedTestMaterials[questionIndex].chosenAnswers.push(value);
                } else {
                    updatedTestMaterials[questionIndex].chosenAnswers = [value];
                }
                break;
            default:
                break;
        }

        this.setState({ testMaterials: updatedTestMaterials });
    };

    showResults = () => {
        let resultScore = 0;

        this.state.testMaterials.forEach((testMaterial) => {
            if (testMaterial.type === 'checkbox') {
                let tmpScore = 0;
                testMaterial.answer.forEach((answer) => {
                    if (testMaterial.chosenAnswers && testMaterial.chosenAnswers.includes(answer)) {
                        tmpScore++;
                    }
                });

                resultScore += tmpScore / testMaterial.answer.length;
            } else {
                if (testMaterial.answer === testMaterial.chosenAnswer) {
                    resultScore++;
                }
            }
        });

        this.setState({ score: resultScore, showResults: true });
    };

    render() {
        const videoUrl = `/courses/${this.props.match.params.courseId}/video/1`;
        
        let nextButton = null;
        let backButton = (
            <Link to={videoUrl}>
                <Button>Back to videos page</Button>
            </Link>
        );

        let questions = null;
        if (this.state.testMaterials.length > 0) {
            questions = this.state.testMaterials.map((question, questionIndex) => {
                let renderedVariants = null;
                const name = `question-${questionIndex}`;

                if (question.type !== 'input') {
                    renderedVariants = question.variants.map((variant, variantIndex) => {
                        const variantId = `variant-${questionIndex}-${variantIndex}`;
                        if (question.type === 'radio') {
                            return (
                                <div>
                                    <input
                                        className={styles.input}
                                        type="radio"
                                        id={variantId}
                                        name={name}
                                        value={variant}
                                    />
                                    <label htmlFor={variantId}>{variant}</label>
                                </div>
                            );
                        } else if (question.type === 'checkbox') {
                            return (
                                <div>
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                        id={variantId}
                                        name={name}
                                        value={variant}
                                    />
                                    <label htmlFor={variantId}>{variant}</label>
                                </div>
                            );
                        }

                        return {};
                    });
                } else {
                    renderedVariants = (
                        <div>
                            <input type="text" placeholder="Enter your answer" className={styles.inputText} />
                        </div>
                    );
                }

                return (
                    <form
                        className={styles.Question}
                        data-id={question._id}
                        data-type={question.type}
                        onChange={(e) => {
                            const { type, id } = e.target.parentElement.parentElement.dataset;
                            this.setTestMaterialValue(type, id, e.target.value);
                        }}
                    >
                        <h3>
                            {questionIndex + 1}. {question.question}
                        </h3>
                        {renderedVariants}
                    </form>
                );
            });
        }

        return (
            <div className={styles.TestPage}>
                <div className="center-content">
                    <h2>Test {this.state.currentNumber}</h2>
                    <div className={styles.QuestionsContainer}>{questions}</div>
                </div>
                <div className="center-content">
                    <div className={styles.ResultsContainer}>
                        <Button onClick={this.showResults}>Show Results</Button>
                        {this.state.showResults && (
                            <p className={styles.results}>
                                You earned {this.state.score} / {this.state.testMaterials.length} points
                            </p>
                        )}
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
