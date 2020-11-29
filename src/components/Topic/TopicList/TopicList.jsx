import React, { Component } from 'react';
import TopicReply from '../TopicReply/TopicReply';

class TopicList extends Component {
    render() {
        return (
            <ul className="reviews__list">
                {this.props.replies
                    .sort((a, b) => b.date - a.date)
                    .map((reply) => (
                        <TopicReply key={reply.id} reply={reply} />
                    ))}
            </ul>
        );
    }
}

export default TopicList;
