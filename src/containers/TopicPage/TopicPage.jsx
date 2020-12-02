import React, { Component } from 'react';
import TopicList from '../../components/Topic/TopicList/TopicList.jsx';
import TopicForm from '../../components/Topic/TopicForm/TopicForm.jsx';
import '../../css/style.min.css';
import { connect } from 'react-redux';

class TopicPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: props.location.state.topic,
            replies: [],
            validation: ''
        };

        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/v1/forum/reply?topicId=${this.state.topic.id}`)
            .then((res) => res.json())
            .then((results) => {
                const replies = [];

                for (const reply of results.data.docs) {
                    replies.push({
                        id: reply._id,
                        review: reply.body,
                        author: reply.userId.email || reply.userId.username
                    });
                }

                this.setState({ replies });
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    renderList() {
        return <TopicList replies={this.state.replies} />;
    }

    renderForm() {
        return <TopicForm submitForm={this.submitForm} validation={this.state.validation} />;
    }

    render() {
        return (
            <div className="bg-light-gray global-padding-bottom">
                <section className="reviews">
                    <div className="area align-center text-center row">
                        <h1 className="small-12 medium-6 columns">
                            <br />
                            <br />
                        </h1>
                    </div>
                    <div className="row align-center content-margin-top-negative">
                        <div className="small-12 medium-200 large-200 columns">
                            <div className="content-padding bg-white area">
                                <p className="font-size-large">
                                    <strong>{this.state.topic.title}</strong>
                                </p>
                                <p>
                                    <span role="img" aria-label="emoji">
                                        📌{' '}
                                    </span>
                                    <strong>{this.state.topic.body}</strong>
                                </p>
                                {this.renderList()}
                            </div>
                            {this.renderForm()}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    submitForm(event, data) {
        event.preventDefault();

        const { reply } = data;

        // Validation
        if (reply === '') {
            this.setState({
                validation: <div className="validation">Not all fields are completed!</div>
            });

            return;
        }

        fetch('http://localhost:4000/api/v1/forum/reply', {
            method: 'post',
            body: JSON.stringify({
                userId: this.props.user._id,
                topicId: this.state.topic.id,
                body: reply
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.token}`
            }
        })
            .then((res) => res.json())
            .then((results) => {
                if (results.status === 'success') {
                    window.location.reload();
                }
            })
            .catch((e) => {
                console.log(e.messsage);
            });
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    user: state.userData
});

export default connect(mapStateToProps)(TopicPage);
