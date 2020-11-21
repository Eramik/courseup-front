import React, {Component} from 'react';

class TopicReview extends Component {
    render()
    {
        return (
            <li key={this.props.index} className="reviews__list-item reset-list block-padding-vertical">
                <div className="review area">
                    <h3 className="review__title">{this.props.review.name}</h3>

                    <div className="review__content">
                        {this.props.review.review}
                    </div>
                </div>
            </li>
        );
    }

}

export default TopicReview;
