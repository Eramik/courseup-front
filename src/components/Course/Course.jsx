import React from 'react'
import styles from './Course.module.scss';
import CourseImg from './CourseImg.jpg';

const Course = (props) => {

    const { name, summary, category, difficulty, rating } = props;

    return (
        <figure className={styles.Course}>
            {/* image section */}
            <div>
                <img src={CourseImg} alt="hello" />
            </div>
            {/* info section */}
            <div>
                <h3>{name}</h3>
                <p className={styles.summary}>{summary}</p>
                <h4>{category}</h4>
                <p><span>Difficulty:</span> {difficulty}</p>
                <p><span>Rating:</span> {rating}</p>
            </div>
        </figure>
    );
}

export default Course