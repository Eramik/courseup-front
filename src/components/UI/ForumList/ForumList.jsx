import React, {Component} from 'react';
import TopicReview from '../TopicReview/TopicReview.jsx';

class ForumList extends Component {
    render()
    {
        return (
            <ul className="reviews__list">
                {this.props.reviews.sort((a,b) => b.date - a.date).map((review, index) => <TopicReview index={index} review={review}/>)}
            </ul>
        );
    }
}

export default ForumList;