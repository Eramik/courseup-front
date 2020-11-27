import React, {Component} from 'react';
import ForumList from '../../components/UI/ForumList/ForumList.jsx';
import ForumForm from '../../components/UI/ForumForm/ForumForm.jsx';
import '../../css/style.min.css';

class ForumPage extends Component {
    constructor()
    {   
        super();

        this.state = {
            topics: [
                {
                    title: 'Midd Spicer',
                    course: 'test',
                    author: 'test',
                    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
                },
                {
                    title: 'Ron Morris',
                    course: 'test',
                    author: 'test',
                    body:
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ],
            validation: ''
        };

        this.submitForm = this.submitForm.bind(this);
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
                            <div className="content-padding bg-white area">
                                {this.renderList()}
                            </div>
                            {this.renderForm()}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    renderList() {
        return <ForumList topics={this.state.topics}/>;
    }

    renderForm() {
        return <ForumForm submitForm={this.submitForm} validation={this.state.validation}/>;
    }

    submitForm(event)
    {
        event.preventDefault();
        const topics = this.state.topics.slice();

        if(event.target.nameTopic.value === '' || event.target.topic.value === '') {
            this.setState({
                ...this.state,
                validation: <div className="validation">Not all fields are completed!</div>
            });

            return;
        }
        
        this.setState({
            ...this.state,
            topicName: this.state.topicName,
            topicText: this.state.topicText,
            validation: ''
        });

        topics.push({
            nameTopic: event.target.nameTopic.value,
            topic: event.target.topic.value,
        });

        this.setState({
            ...this.state,
            topicName: this.state.topicName,
            topicText: this.state.topicText,
            topics: topics,
            validation: ''
        });
    }

}

export default ForumPage;
