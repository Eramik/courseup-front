import React, {Component} from 'react';

class TopicReview extends Component {
    render() {
        return (
            <li key={this.props.index} className="reviews__list-item reset-list block-padding-vertical">
                <div className="review area">
                    <h3 className="review__title">{this.props.topic.title}</h3>
                    <h3 className="review__title">{this.props.topic.course}</h3>
                    <h3 className="review__title">{this.props.topic.author}</h3>
                    <div className="review__content">
                        {this.props.topic.body}
                    </div>
                </div>
            </li>
        );
    }

}

export default TopicReview;
