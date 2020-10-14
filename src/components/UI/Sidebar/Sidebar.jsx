import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = props => {
    const { categoryChanged, categoryCleared } = props;

    return (
        <div className={styles.Sidebar}>
            <NavLink to="/courses/" onClick={() => categoryCleared()}>
                All
            </NavLink>
            <NavLink to="/courses/computers" onClick={() => categoryChanged('computers')}>
                Computers
            </NavLink>
            <NavLink to="/courses/other" onClick={() => categoryChanged('other')}>
                Other
            </NavLink>
            <NavLink to="/courses/technique" onClick={() => categoryChanged('technique')}>
                Technique
            </NavLink>
        </div>
    );
};

export default Sidebar;
