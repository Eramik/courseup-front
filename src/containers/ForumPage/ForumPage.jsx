import React, { Component } from 'react';
import ForumList from '../../components/Forum/ForumList/ForumList.jsx';
import ForumForm from '../../components/Forum/ForumForm/ForumForm.jsx';
import { connect } from 'react-redux';
import '../../css/style.min.css';

class ForumPage extends Component {
    constructor() {
        super();

        this.state = {
            topics: [],
            validation: ''
        };

        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        console.log(this.props);

        fetch('http://localhost:4000/api/v1/forum/topic', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        })
            .then((res) => res.json())
            .then((results) => {
                const topics = [];

                for (const topic of results.data.docs) {
                    topics.push({
                        id: topic._id,
                        body: topic.body,
                        title: topic.title,
                        course: topic.courseId.name,
                        author: topic.userId.email
                    });
                }

                this.setState({ topics });
            })
            .catch((e) => {
                console.log(e.message);
            });
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
                        <div className="small-12 medium-8 large-6 columns">
                            <div className="content-padding bg-white area">{this.renderList()}</div>
                            {this.renderForm()}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    renderList() {
        return <ForumList topics={this.state.topics} />;
    }

    renderForm() {
        return (
            <ForumForm
                submitForm={this.submitForm}
                validation={this.state.validation}
                topics={this.state.topics}
            />
        );
    }

    submitForm(event, data) {
        event.preventDefault();

        const { courseId, topicTitle, topicBody } = data;

        // Validation
        if (topicTitle === '' || topicBody === '' || !courseId) {
            this.setState({
                validation: <div className="validation">Not all fields are completed!</div>
            });

            return;
        }

        fetch('http://localhost:4000/api/v1/forum/topic', {
            method: 'post',
            body: JSON.stringify({
                userId: this.props.user._id,
                courseId,
                title: topicTitle,
                body: topicBody
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

export default connect(mapStateToProps)(ForumPage);
