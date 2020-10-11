import React from 'react'
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className={styles.Sidebar}>
            <NavLink to='/courses/'>All</NavLink>
            <NavLink to='/courses/category1'>First</NavLink>
            <NavLink to='/courses/category2'>Second</NavLink>
            <NavLink to='/courses/category3'>Third</NavLink>
        </div>
    );
}

export default Sidebar
