import React, { Component } from 'react';
import Course from '../../components/Course/Course';
import Searchbar from '../../components/UI/Searchbar/Searchbar';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import styles from './Mainpage.module.scss';

export class Mainpage extends Component {
    state = {
        courses: [
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'Computers',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'Computers',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'Computers',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'Computers',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'Computers',
                difficulty: 'beginner',
                rating: '4.7'
            }
        ]
    };

    // when component is initially rendered
    componentDidMount() {
        // api call -> result
        // fetch('http://example.com/movies.json')
        //     .then(data => this.setState({ courses: data }));
    }

    render() {
        // [{}, {}, {}] => map => [<Course />, <Course />, ...]
        const coursesElements = this.state.courses.map(course => {
            return (
                <Course
                    name={course.name}
                    summary={course.summary}
                    category={course.category}
                    difficulty={course.difficulty}
                    rating={course.rating}
                />
            );
        });

        return (
            <main className={styles.Mainpage}>
                <Sidebar />
                <div style={{ flex: 1 }}>
                    <Searchbar />
                    <div className={styles.CoursesContainer}>
                        {coursesElements}
                    </div>
                </div>
            </main>
        );
    }
}

export default Mainpage;
