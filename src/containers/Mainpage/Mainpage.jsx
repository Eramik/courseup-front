import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Course from '../../components/Course/Course';
import Searchbar from '../../components/UI/Searchbar/Searchbar';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import styles from './Mainpage.module.scss';

export class Mainpage extends Component {
    state = {
        courses: [
            {
                id: 1,
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'computers',
                difficulty: 'middle',
                rating: '4.0'
            },
            {
                id: 2,
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'technique',
                difficulty: 'beginner',
                rating: '4.5'
            },
            {
                id: 3,
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'computers',
                difficulty: 'beginner',
                rating: '5'
            },
            {
                id: 4,
                name: 'JS for beginners',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'other',
                difficulty: 'beginner',
                rating: '3.5'
            },
            {
                id: 5,
                name: 'JS',
                summary: 'Learn JS from scratch and become an awesome developer',
                category: 'other',
                difficulty: 'advanced',
                rating: '4.1'
            }
        ],
        coursesToDisplay: [],
        searchValue: ''
    };

    componentDidMount() {
        // 1. api call => response
        // 2. this.setState(response: courses)

        // 3. courses to display = courses
        this.setState({ coursesToDisplay: [...this.state.courses] });
    }

    clearCategoryHandler = () => {
        this.setState({ coursesToDisplay: [...this.state.courses] });
    };

    filterHandler = (course, filterType, filterValue) => {
        switch (filterType) {
            case 'category':
                return course.category === filterValue;
            case 'rating':
                return course.rating >= filterValue;
            case 'difficulty':
                return filterValue === 'all' ? true : course.difficulty === filterValue;
            case 'name':
                return this.state.searchValue === '' ? true : course.name.includes(this.state.searchValue);
            default:
                return course;
        }
    };

    applyFiltersHandler = (filterType, filterValue) => {
        let updatedCourses = [...this.state.coursesToDisplay];
        updatedCourses = this.state.courses.filter((course) =>
            this.filterHandler(course, filterType, filterValue)
        );

        this.setState({ coursesToDisplay: updatedCourses });
    };

    changeSearchValueHandler = (value) => this.setState({ searchValue: value });

    render() {
        const coursesElements = this.state.coursesToDisplay.map((course) => {
            return (
                <Link to={`/courses/${course.id}`}>
                    <Course
                        name={course.name}
                        summary={course.summary}
                        category={course.category}
                        difficulty={course.difficulty}
                        rating={course.rating}
                    />
                </Link>
            );
        });

        return (
            <main className={styles.Mainpage}>
                <Sidebar
                    applyFilters={this.applyFiltersHandler}
                    categoryCleared={this.clearCategoryHandler}
                />
                <div className={styles.Container}>
                    <Searchbar
                        searchValue={this.state.searchValue}
                        searchValueChanged={this.changeSearchValueHandler}
                        applyFilters={this.applyFiltersHandler}
                        difficultyCleared={this.clearDifficultyHandler}
                    />
                    <div className={styles.CoursesContainer}>{coursesElements}</div>
                </div>
            </main>
        );
    }
}

export default Mainpage;
