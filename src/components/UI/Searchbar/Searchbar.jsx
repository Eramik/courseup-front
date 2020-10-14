import React from 'react';
import styles from './Searchbar.module.scss';

const Searchbar = (props) => {
    const { ratingChanged } = props;
    const { difficultyChanged, difficultyCleared } = props;
    function changeRatingFunc(){
        var selectBox1 = document.getElementById("selectBox1");
        var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
        ratingChanged(selectedValue1);
    }
    function changeDifficultyFunc(){
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if(selectedValue === "all"){
            difficultyCleared();
        }
        else{
            difficultyChanged(selectedValue);
        }
    }
    return (
        <div className={styles.Searchbar}>
            <input
                className={styles.Search}
                value={props.courseName}
                // onChange={() => { // change courseName in Mainpage }}
                type="text"
                name="search"
                id="search"
                placeholder="Search courses by name"
            />
            <select name="difficulty" id="selectBox" onChange={() => changeDifficultyFunc()}>
                <option value="all">
                    All
                </option>
                <option value="beginner">
                    Beginner
                </option>
                <option value="middle" >
                    Middle
                </option>
                <option value="advanced">
                    Advanced
                </option>
            </select>
            <select name="rating" id="selectBox1" onChange={() => changeRatingFunc()}>
                <option value="3.5">
                    3.5+
                </option>
                <option value="4">
                   4+
                </option>
                <option value="4.5">
                    4.5+
                </option>
            </select>
        </div>
    );
};

export default Searchbar;
