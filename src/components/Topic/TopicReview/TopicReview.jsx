import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicReview extends Component {
    render() {
        return (
            <li key={this.props.topic.id} className="reviews__list-item reset-list block-padding-vertical">
                <Link
                    to={{
                        pathname: `/forum/topic/${this.props.topic.id}`,
                        state: { topic: this.props.topic }
                    }}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="review area">
                        <h3 className="review__title">{this.props.topic.title}</h3>
                        <h3 className="review__title">Course: {this.props.topic.course}</h3>
                        <h3 className="review__title">Author: {this.props.topic.author}</h3>
                        <div className="review__content">{this.props.topic.body}</div>
                    </div>
                </Link>
            </li>
        );
    }
}

export default TopicReview;
