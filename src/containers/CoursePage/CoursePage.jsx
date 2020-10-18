import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import Button from '../../components/UI/Button/Button';
import styles from './CoursePage.module.scss';

export class CoursePage extends Component {
    render() {
        return (
            <div className={styles.CoursePage}>
                <div className={styles.Header}>
                    <div className="center-content">
                        <h2>Course Name</h2>
                        <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
                        <p>Difficulty: beginner</p>
                        <p className={styles.Rating}>
                            <span>Rating:</span>
                            <StarRatings
                                rating={4.8}
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
                            <p className={styles.DescriptionText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className={styles.DescriptionText}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className={styles.DescriptionText}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className={styles.Structure}>
                            <h3>Course Structure: </h3>
                            <div className={styles.CourseMaterial}>
                                <p>
                                    <span role="img" aria-label="text-icon">📃</span>
                                    Text material (amount)
                                </p>
                            </div>
                            <div className={styles.CourseMaterial}>
                                <p>
                                    <span role="img" aria-label="video-icon">🎥</span>
                                    Video material (amount)
                                </p>
                            </div>
                            <div className={styles.CourseMaterial}>
                                <p>
                                    <span role="img" aria-label="test-icon">📝</span>
                                    Test material (amount)
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
                        <Button>Enroll course</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursePage
