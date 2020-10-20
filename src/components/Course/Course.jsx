import React from 'react'
import StarRatings from 'react-star-ratings';

import styles from './Course.module.scss';
import CourseImg from './CourseImg.jpg';

const Course = (props) => {

    const { name, summary, category, difficulty, rating } = props;

    return (
        <figure className={styles.Course}>
            <div>
                <img src={CourseImg} alt="hello" />
            </div>
            <div>
                <h3>{name}</h3>
                <hr />
                <p className={styles.summary}>{summary}</p>
                <h4>{category}</h4>
                <p>
                    <span>Difficulty: </span>
                    {difficulty}
                </p>
                <p className={styles.rating}>
                    <StarRatings
                        rating={parseFloat(rating)}
                        starRatedColor="#eea928"
                        starDimension="22px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name="course-rating"
                    />
                </p>
            </div>
        </figure>
    );
}

export default Course