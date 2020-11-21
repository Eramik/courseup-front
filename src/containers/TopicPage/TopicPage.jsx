import React, {Component} from 'react';
import TopicList from '../../components/UI/TopicList/TopicList.jsx';
import TopicForm from '../../components/UI/TopicForm/TopicForm.jsx';
import '../../css/style.min.css';


class TopicPage extends Component {
    constructor()
    {
        super();

        this.state = {
            topicName: 'Brun McIntyre',
            topicText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',

            reviews: [
                {
                    name: 'Midd Spicer',
                    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                },
                {
                    name: 'Ron Morris',
                    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                }
            ],
            validation: ''
        };

        this.submitForm = this.submitForm.bind(this);
    }

    render()
    {
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

                                <p className="font-size-medium">
                                    <strong>{this.state.topicName}</strong>
                                </p>
                                <p>
                                    📌 <strong>{this.state.topicText}</strong>
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

    renderList()
    {
        return <TopicList reviews={this.state.reviews}/>;
    }

    renderForm()
    {
        return <TopicForm submitForm={this.submitForm} validation={this.state.validation}/>;
    }

    submitForm(event)
    {
        event.preventDefault();
        const reviews = this.state.reviews.slice();

        if(event.target.name.value === '' || event.target.review.value === '') {
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

        reviews.push({
            name: event.target.name.value,
            review: event.target.review.value,
        });

        this.setState({
            ...this.state,
            topicName: this.state.topicName,
            topicText: this.state.topicText,
            reviews: reviews,
            validation: ''
        });
    }

}

export default TopicPage;
