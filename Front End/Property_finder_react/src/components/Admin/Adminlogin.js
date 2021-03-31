import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeAdminname = this.onChangeAdminname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeAdminname(e) {
    this.setState({
      email: e.target.value,
     
    });
    console.log(e.email);
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
console.log("email "+this.state.email+" pass "+this.state.password);
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.AdminLogin(this.state.email, this.state.password).then(
        () => {
          
         
          window.location="/AdminPage";
        },
        error => {
          

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
      < >
      <div className="admin">
      <div className="  card col-md-4 offset-md-2 offset-md-4 mt-5">
    
        <div className="card card-container">
          <h2>Admin Login</h2>
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="Admin">Email Address</label>
              <Input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeAdminname}
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
      </>
    );
  }
}
