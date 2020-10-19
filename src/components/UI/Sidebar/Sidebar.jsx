import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = (props) => {
    const { applyFilters, categories, categoryCleared } = props;

    const categoriesElements = categories.map((category) => (
        <button onClick={() => applyFilters('category', category)} key={category}>
            {category[0].toUpperCase() + category.substr(1)}
        </button>
    ));

    return (
        <div className={styles.Sidebar}>
            <button to="/courses/" onClick={() => categoryCleared()}>
                All
            </button>
            {categoriesElements}
        </div>
    );
};

export default Sidebar;
