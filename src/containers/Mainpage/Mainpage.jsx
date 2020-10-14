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
                difficulty: 'middle',
                rating: '4.0'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'technique',
                difficulty: 'beginner',
                rating: '4.5'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'computers',
                difficulty: 'beginner',
                rating: '5'
            },
            {
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'other',
                difficulty: 'beginner',
                rating: '3.5'
            },
            {
                name: 'JS',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'other',
                difficulty: 'advanced',
                rating: '4.1'
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
    
    clearDifficultyHandler = () => {
        this.setState({ coursesToDisplay: [...this.state.courses] });
    }

    // the same with ratings/diffcilty/search
    changeCategoryHandler = (category) => {
        const updatedCourses = this.state.courses.filter(course => course.category === category);
        this.setState({ coursesToDisplay: updatedCourses });
    }
    changeRatingHandler = (rating) => {
        const updatedCourses = this.state.courses.filter(course => course.rating >= rating);
        this.setState({ coursesToDisplay: updatedCourses });
    }
    changeDifficultyHandler = (difficulty) => {
        const updatedCourses = this.state.courses.filter(course => course.difficulty === difficulty);
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
                    <Searchbar courseName={this.state.courseName}
                        ratingChanged={this.changeRatingHandler}
                        difficultyChanged={this.changeDifficultyHandler}
                        difficultyCleared={this.clearDifficultyHandler}
                    />
                    <div className={styles.CoursesContainer}>{coursesElements}</div>
                    {/* Route path='/courses/:courseId' component CoursePage */}
                </div>
            </main>
        );
    }
}

export default Mainpage;
