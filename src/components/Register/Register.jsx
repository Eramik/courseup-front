import React from "react";
import './Register.scss'; 
import loginImg from "../../login.svg";
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import cookies from 'js-cookie';
import { withRouter } from "react-router-dom";

export class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }
  
  handleUsernameChange = (event)=>{
    this.setState({username: event.target.value})
  }

  handleEmailChange = (event)=>{
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event)=>{
    this.setState({password: event.target.value})
  }

  componentDidMount() {
      console.log(this.props);
  }

  handleSubmit = async () => {
    const { username, email, password} = this.state;

    const authData = {
        username,
        email,
        password
    };

    try {
        const rawResponse = await fetch('http://localhost:4000/api/v1/users/signup', {
          method: 'post',
          body: JSON.stringify(authData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const response = await rawResponse.json();

        const { token, data: { user }} = response;

        // Got token and user, save it to redux (and cookies)
        this.props.authSuccess(token, user);

        // Save it to cookies
        cookies.set('token', token);
        cookies.set('user', JSON.stringify(user));

        this.props.history.push('/courses');
    } catch (e) {
        console.log(e.message);
    }
  }

  render() {

    console.log(this.props.state);

    return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Register" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" 
              value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" 
              value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" 
              value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
          </div>
        </div>
        <div className="footer">
            <Button onClick={() => this.handleSubmit()}>
                Register
            </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        authStart: () => dispatch(actions.authStart()),
        authSuccess: (token, user) => dispatch(actions.authSuccess(token, user)),
        authFail: () => dispatch(actions.authFail())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));