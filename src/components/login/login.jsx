import React from "react";
import loginImg from "../../logo1.jpeg";

export class Login extends React.Component {
  

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} className="center" alt="logo"/>
          </div>
          <div className="header">Login to your account</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="Email address" placeholder="Email address" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="********" id="password" />
            
              <a href="#"> Signin as Chef</a>&nbsp;
              <a href="#"> Signin as User</a>&nbsp;
              <a href="#"> forget your password?</a>&nbsp;
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn1">
            Login
          </button>
          
        </div>
        <span>
        <a href="#"> Signup for Chef </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;
        <a href="#"> Signup for User</a>
        </span>
        

      </div>
    );
  }
}