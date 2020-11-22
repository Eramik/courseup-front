import React, {Component} from 'react';
import List from '../../components/UI/List/List.jsx';
import Form from '../../components/UI/Form/Form.jsx';
import '../../css/style.min.css';
import { connect } from 'react-redux';


class ReviewPage extends Component {
    constructor()
    {
        super();

        this.state = {
            reviews: [
                {
                    rating: 3,
                    name: 'Test Name',
                    review: 'Test review Test review Test review Test reviewTest review Test review Test review Test review Test review Test review',
                },
                {
                    rating: 4,
                    name: 'Test Name',
                    review: 'Test review Test review Test review Test reviewTest reviewTest reviewTest reviewTest reviewTest reviewTest review',
                }
            ],
            courseId: null,
            update: 0,
        };

        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount()
    {
        this.setState({
            ...this.state, averageRating: this.getAverageRating(this.state.reviews)
        });
    }

    componentDidMount() {
        const { courseId } = this.props.match.params;

        fetch(`http://localhost:4000/api/v1/reviews?courseId=${courseId}`)
            .then((results) => results.json())
            .then((response) => {
                const reviews = response.data.docs;

                reviews.forEach((review) => {
                    review.name = review.userId.username;
                });

                console.log(reviews);

                this.setState({ reviews, courseId });      
            })
            .catch((e) => {
                console.log(e.message);
            })
    }

    render()
    {
        return (
            <div className="bg-light-gray global-padding-bottom">
                <section className="reviews">
                    <div className="area align-center text-center row">
                        <h1 className="small-12 medium-6 columns">
                            <span className="font-weight-regular"></span><br />
                            <span className="font-size-xxlarge text-uppercase"></span>
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

    renderList()
    {
        return <List reviews={this.state.reviews}/>;
    }

    renderForm()
    {
        return <Form submitForm={this.submitForm} validation={this.state.validation}/>;
    }

    submitForm = async(event) =>
    {
        event.preventDefault();
        console.log(event.target.rating.value, event.target.name.value, event.target.review.value); 

        if(event.target.rating.value === '' || event.target.name.value === '' || event.target.review.value === '') {
            this.setState({
                ...this.state,
                validation: <div className="validation">Not all fields are completed</div>
            });

            return;
        }

        const data = {
            userId: this.props.userData._id,
            courseId: this.state.courseId,
            review: event.target.name.value,
            rating: event.target.rating.value
        };

        try {
            const response = await fetch('http://localhost:4000/api/v1/reviews/leave-review', {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${this.props.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            this.setState({ update: this.state.update + 1 });

            console.log(response);
        } catch (e) {
            console.log(e.message);
        }

    }

    getAverageRating(reviews)
    {
        var totalRating = 0;

        reviews.map(function (review)
        {
            totalRating = totalRating + review.rating;
        });

        return Math.round(totalRating / reviews.length * 2 * 10) / 10;
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        userData: state.userData
    }
};

export default connect(mapStateToProps)(ReviewPage);
