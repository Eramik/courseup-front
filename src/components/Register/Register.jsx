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

  /* handleSubmit = () => {
    let {username,email,password} = this.state;
    fetch('http://localhost:3000/signup', {
      method: 'post',
      body: email, password, username
      returns: {
        token,
        data: { userData }
      }
    })
  } */

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
              <input type="text" name="username" placeholder="username" value = {this.state.username} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value = {this.state.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value = {this.state.password} />
            </div>
          </div>
        </div>
        <div className="footer">
            <Button>
                Register
            </Button>
        </div>
      </div>
    );
  }
}

export default Register;