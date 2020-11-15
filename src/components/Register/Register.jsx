import React from "react";
import styles from './Register.scss'; 
import loginImg from "../../login.svg";
import Button from '../UI/Button/Button';

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

  handleSubmit = async () => {
    const { username, email, password} = this.state;

    const authData = {
        username,
        email,
        password
    };

    console.log(authData);

    try {
        const rawResponse = await fetch('http://localhost:4000/api/v1/users/signup', {
          method: 'post',
          body: JSON.stringify(authData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const response = await rawResponse.json();

        // Got token and user, save it to redux (and cookies)

    } catch (e) {
        console.log(e.message);
    }
  }

  render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
          </div>
        </div>
        <div className="footer">
            <Button clicked={this.handleSubmit}>
                Register
            </Button>
        </div>
      </div>
    );
  }
}

export default Register;