import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import Button from '../../components/UI/Button/Button';
import styles from './CoursePage.module.scss';

const { REACT_APP_API: api } = process.env;

export class CoursePage extends Component {

    state = {
        course: {}
    }

    componentDidMount() {
        const { courseId } = this.props.match.params;

        // Get single course data
        fetch(`${api}/courses/${courseId}`)
            .then((result) => result.json())
            .then((response) => {
                const fetchedCourse = response.data.course; 
                this.setState({ course: fetchedCourse });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {


        let formattedCourseDescription = null;
        if (this.state.course.description) {
            formattedCourseDescription = this.state.course.description.split('\\n')
                .map((part) => <p className={styles.Description}>{part}</p>);
        }

        
        return (
            <div className={styles.CoursePage}>
                <div className={styles.Header}>
                    <div className="center-content">
                        <h2>{this.state.course.name}</h2>
                        <h4>{this.state.course.summary}</h4>
                        <p>Difficulty: {this.state.course.difficulty}</p>
                        <p className={styles.Rating}>
                            <span>Rating:</span>
                            <StarRatings
                                rating={parseFloat(this.state.course.rating || 4.8)}
                                starRatedColor="#eea928"
                                starDimension="22px"
                                starSpacing="3px"
                                numberOfStars={5}
                                name="course-rating"
                            />
                        </p>
                    </div>
                </div>
                <div className={styles.MainInfo}>
                    <div className="center-content">
                        <div className={styles.Description}>
                            <h3>Description:</h3>
                            {formattedCourseDescription}
                        </div>
                        <div className={styles.Structure}>
                            <h3>Course Structure: </h3>
                            <div className={styles.CourseMaterial}>
                                <p>
                                    <span role="img" aria-label="text-icon">📃</span>
                                    Text material ({this.state.course.materials ? 
                                    this.state.course.materials.texts.length : '0'})
                                </p>
                            </div>
                            <div className={styles.CourseMaterial}>
                                <p>
                                    <span role="img" aria-label="video-icon">🎥</span>
                                    Video material ({this.state.course.materials ? 
                                    this.state.course.materials.videos.length : '0'})
                                </p>
                            </div>
                            <div className={styles.CourseMaterial}>
                                <p>
                                    <span role="img" aria-label="test-icon">📝</span>
                                    Test material ({this.state.course.materials ? 
                                    this.state.course.materials.tests.length : '0'})
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Footer}>
                    <div className="center-content">
                        <Link to="/courses">
                            <Button style={{ marginRight: '2rem' }}>Back</Button>
                        </Link>
                        <Link to={(location) => `${location.pathname}read/1`}>
                            <Button>Enroll course</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursePage
