import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './Owner.css';
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class OwnerLogin extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeOwnername = this.onChangeOwnername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeOwnername(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.Ownerlogin(this.state.email, this.state.password).then(
        () => {
          
         alert("Owner Logged In SuccessFully");
         toast("success");
          window.location="/Ownerpage";
        },
        (error) => {
          

          this.setState({
            loading: false,
            message: "Invalid Login Details"
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
   
  }

  render() {
    return (
      <div className="owner">
      <div className=" card col-md-4 offset-md-2 offset-md-4 mt-5">
        
        <div className="card card-container">
          <h2>Owner Login</h2>
         

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="ownername">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeOwnername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              <div className="form-group">
             <p>Not registerd ? <a href="/ownerregistration"><Link to="/ownerregistration">Sign Up</Link> </a></p>
             </div>
            </div>
             
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
          </div>
        </div>
        </div>
     
    );
  }
}
