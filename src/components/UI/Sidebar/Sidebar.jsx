import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = props => {
    const { applyFilters, categoryCleared } = props;

    return (
        <div className={styles.Sidebar}>
            <button to="/courses/" onClick={() => categoryCleared()}>
                All
            </button>
            <button to="/courses/computers" onClick={() => applyFilters('category', 'computers')}>
                Computers
            </button>
            <button to="/courses/other" onClick={() => applyFilters('category', 'other')}>
                Other
            </button>
            <button to="/courses/technique" onClick={() => applyFilters('category', 'technique')}>
                Technique
            </button>
        </div>
    );
};

export default Sidebar;
