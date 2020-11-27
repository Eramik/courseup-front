import React, {Component} from 'react';
import ButtonSpecial from '../ButtonSpecial/ButtonSpecial.jsx';

class ForumForm extends Component {
    constructor()
    {
        super();

        this.state = {
            isActive: false,
            isSubmitted: false,
            name: '',
            review: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render()
    {
        return (
            <div className="review-form bg-white content-padding block-margin-top">
                <form className={this.state.isActive ? '' : 'hide'} onSubmit={this.props.submitForm}>
                    {this.props.validation}
                    <input type="text" value={this.state.name} name="name" placeholder="Name"
                           onChange={this.handleInputChange}/>
                    <textarea name="review" value={this.state.review} placeholder="Enter text"
                              onChange={this.handleInputChange}/>
                    <button className="button">
                        Post
                    </button>
                </form>

                {this.showButton()}

            </div>
        )
    }

    showForm()
    {
        this.setState({...this.state, isActive: true});
    }

    showButton()
    {
        return <ButtonSpecial isActive={this.state.isActive} showForm={() => this.showForm()}/>;
    }

    handleInputChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({...this.state, [name]: value})
    }
}

export default ForumForm;
