import React from 'react';
import TopicReview from '../TopicReview/TopicReview.jsx';

const ForumList = (props) => {
    return (
        <ul className="reviews__list">
            {props.topics
                .sort((a, b) => b.date - a.date)
                .map((topic, index) => (
                    <TopicReview index={index} topic={topic} />
                ))}
        </ul>
    );
};

export default ForumList;
