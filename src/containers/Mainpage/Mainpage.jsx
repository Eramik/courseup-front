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
                category: 'computers',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'technique',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'computers',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'other',
                difficulty: 'beginner',
                rating: '4.7'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'other',
                difficulty: 'beginner',
                rating: '4.7'
            }
        ],
        coursesToDisplay: [],
        courseName: 'course'
    };

    componentDidMount() {
        // 1. api call => response
        // 2. this.setState(response: courses)

        // 3. courses to display = courses
        this.setState({ coursesToDisplay: [...this.state.courses] });
    }

    clearCategoryHandler = () => {
        this.setState({ coursesToDisplay: [...this.state.courses] });
    }

    // the same with ratings/diffcilty/search
    changeCategoryHandler = (category) => {
        const updatedCourses = this.state.courses.filter(course => course.category === category);
        this.setState({ coursesToDisplay: updatedCourses });
    }

    render() {
        const coursesElements = this.state.coursesToDisplay.map(course => {
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
                <Sidebar
                    categoryChanged={this.changeCategoryHandler}
                    categoryCleared={this.clearCategoryHandler}
                />
                <div style={{ flex: 1 }}>
                    {/* Route path='/courses' component CoursesPage */}
                    <Searchbar courseName={this.state.courseName} />
                    <div className={styles.CoursesContainer}>{coursesElements}</div>
                    {/* Route path='/courses/:courseId' component CoursePage */}
                </div>
            </main>
        );
    }
}

export default Mainpage;
