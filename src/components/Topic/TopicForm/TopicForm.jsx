import React, { Component } from 'react';
import ButtonSpecial from '../../UI/ButtonSpecial/ButtonSpecial';

class TopicForm extends Component {
    constructor() {
        super();

        this.state = {
            isActive: false,
            isSubmitted: false,
            reply: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <div className="review-form bg-white content-padding block-margin-top">
                <form className={this.state.isActive ? '' : 'hide'} onSubmit={(e) => {
                    this.props.submitForm(e, {
                        reply: this.state.reply
                    });
                }}>
                    {this.props.validation}
                    <textarea
                        name="reply"
                        value={this.state.reply}
                        placeholder="Enter your reply"
                        onChange={this.handleInputChange}
                    />
                    <input type="submit" className="button" value="Add Reply" />
                </form>
                {this.showButton()}
            </div>
        );
    }

    showForm() {
        this.setState({ ...this.state, isActive: true });
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

export default TopicForm;
