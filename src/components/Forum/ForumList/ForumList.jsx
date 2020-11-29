import React from 'react';
import TopicReview from '../../Topic/TopicReview/TopicReview';

const ForumList = (props) => {
    return (
        <ul className="reviews__list">
            {props.topics
                .map((topic) => (
                    <TopicReview 
                        key={topic.id} 
                        topic={topic}
                    />
                ))}
        </ul>
    );
};

export default ForumList;
