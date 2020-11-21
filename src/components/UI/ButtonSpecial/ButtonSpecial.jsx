import React, {Component} from 'react';

class ButtonSpecial extends Component {
    render()
    {
        return (
            <button id="toggle" className={this.props.isActive ? 'button hide' : 'button'} onClick={this.props.showForm}>➕</button>
        );
    }
}

export default ButtonSpecial;