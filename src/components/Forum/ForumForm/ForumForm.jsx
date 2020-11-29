import React, { Component } from 'react';
import ButtonSpecial from '../../UI/ButtonSpecial/ButtonSpecial';

class ForumForm extends Component {
    constructor() {
        super();

        this.state = {
            isActive: false,
            isSubmitted: false,
            courses: [],
            chosenCourse: null,
            title: '',
            body: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/v1/courses')
            .then((res) => res.json())
            .then((results) => {
                const courses = [];

                for (const course of results.data.docs) {
                    courses.push({
                        id: course._id,
                        name: course.name
                    });
                }

                this.setState({ courses });
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    render() {
        return (
            <div className="review-form bg-white content-padding block-margin-top">
                <form
                    className={this.state.isActive ? '' : 'hide'}
                    onSubmit={(e) => {
                        this.props.submitForm(e, {
                            topicTitle: this.state.title,
                            topicBody: this.state.body,
                            courseId: this.state.chosenCourse
                        });
                    }}
                >
                    {this.props.validation}
                    <select
                        name="chosenCourse"
                        placeholder="Select a course"
                        onChange={this.handleInputChange}
                    >
                        {this.state.courses.length &&
                            this.state.courses.map((course) => (
                                <option value={course.id}>{course.name}</option>
                            ))}
                    </select>
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        placeholder="Topic title"
                        onChange={this.handleInputChange}
                    />
                    <textarea
                        name="body"
                        value={this.state.body}
                        placeholder="Topic body"
                        onChange={this.handleInputChange}
                    />
                    <input type="submit" className="button" value="Create topic" />
                </form>
                {this.showButton()}
            </div>
        );
    }

    showForm() {
        this.setState({ isActive: true });
    }

    showButton() {
        return <ButtonSpecial isActive={this.state.isActive} showForm={() => this.showForm()} />;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }
}

export default ForumForm;
