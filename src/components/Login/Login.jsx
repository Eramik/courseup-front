import React from "react";
import './Login.scss'; 
import loginImg from "../../login.svg";
import Button from '../UI/Button/Button';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  
    render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value = {this.state.password} />
            </div>
          </div>
        </div>
        <div className="footer">
            <Button>
                Login
            </Button>
        </div>
      </div>
    );
    }
}

export default Login;