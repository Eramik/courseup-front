import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Course from '../../components/Course/Course';
import Searchbar from '../../components/UI/Searchbar/Searchbar';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import styles from './Mainpage.module.scss';

const { REACT_APP_API: api } = process.env;

export class Mainpage extends Component {
    state = {
        courses: [],
        coursesToDisplay: [],
        categories: [],
        searchValue: ''
    };

    componentDidMount() {
        // Get courses
        fetch(`${api}/courses`)
            .then((result) => result.json())
            .then((response) => {
                const fetchedCourses = response.data.courses;
                const updatedCourses = [];

                fetchedCourses.forEach((course) => {
                    updatedCourses.push({
                        id: course._id,
                        name: course.name,
                        summary: course.summary,
                        category: course.category,
                        difficulty: course.difficulty,
                        rating: course.rating
                    });
                });

                // this.setState({ courses: response })
                this.setState({ courses: updatedCourses });
                // Courses to display = courses
                this.setState({ coursesToDisplay: [...this.state.courses] });
            })
            .catch((error) => {
                console.log(error);
            });

        // Get categories
        fetch(`${api}/courses/categories`)
            .then((result) => result.json())
            .then((response) => {
                const fetchedCategories = response.data.categories;
                const updatedCategories = [];

                fetchedCategories.forEach((category) => {
                    updatedCategories.push(category._id);
                });

                this.setState({ categories: updatedCategories });
            });
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
                <Link to={`/courses/${course.id}`} key={course.id}>
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
                    categories={this.state.categories}
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
