import React from 'react';
import styles from './Searchbar.module.scss';

const Searchbar = props => {
    const { searchValue, searchValueChanged, applyFilters } = props;

    return (
        <div className={styles.Searchbar}>
            <input
                className={styles.Search}
                value={searchValue}
                onChange={e => searchValueChanged(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') applyFilters('name');
                }}
                type="text"
                name="search"
                id="search"
                placeholder="Search courses by name"
            />
            <select
                name="difficulty"
                id="selectBox"
                onChange={e => applyFilters('difficulty', e.target.value)}
            >
                <option value="all">All</option>
                <option value="beginner">Beginner</option>
                <option value="middle">Middle</option>
                <option value="advanced">Advanced</option>
            </select>
            <select 
                name="rating" 
                id="selectBox1" 
                onChange={e => applyFilters('rating', e.target.value)}
            >
                <option value="3.5">3.5+</option>
                <option value="4">4+</option>
                <option value="4.5">4.5+</option>
            </select>
        </div>
    );
};

export default Searchbar;
