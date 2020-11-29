import React, { Component } from 'react';

class TopicReply extends Component {
    render() {
        return (
            <li key={this.props.reply.id} className="reviews__list-item reset-list block-padding-vertical">
                <div className="review area">
                    <h3 className="review__title">Author: {this.props.reply.author}</h3>
                    <div className="review__content">{this.props.reply.review}</div>
                </div>
            </li>
        );
    }
}

export default TopicReply;
