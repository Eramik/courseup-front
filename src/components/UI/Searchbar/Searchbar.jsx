import React from 'react'
import styles from './Searchbar.module.scss';

const Searchbar = (props) => {
    return (
        <div className={styles.Searchbar}>
            <input className={styles.Search}type="text" name="search" id="search" placeholder="Search courses by name" />
            <select name="difficulty">
                <option value="beginner">Beginner</option>
                <option value="middle">Middle</option>
                <option value="advanced">Advanced</option>
            </select>
            <select name="rating" id="">
                <option value="3.5+">3.5+</option>
                <option value="4+">4+</option>
                <option value="4.5+">4.5+</option>
            </select>
        </div>
    )
}

export default Searchbar
