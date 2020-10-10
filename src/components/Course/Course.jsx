import React from 'react'
import styles from './Course.module.scss';
import CourseImg from './CourseImg.jpg';

const Course = (props) => {
    return (
        <div className={styles.Course}>
            <img src={CourseImg} alt="Course image" />
                <ul className={styles.ul}>
                    <li className={styles.li}>CourseName</li>
                    <li className={styles.li}>Category</li>
                    <li className={styles.li}>Summary</li>
                    <li className={styles.li}>Complexity</li>
                    <li className={styles.li}>Rating</li>
                </ul>
        </div>
    );
}

export default Course