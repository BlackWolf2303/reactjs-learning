import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname:"",
      password:"",
      email:"",
      termsOfService: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name] : value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    
  }

  render() {
    console.log(this.props.history);
    
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.onSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              value={this.state.fullname}
              onChange={this.onChange}
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your fullname"
              name="fullname"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-mail Address
            </label>
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your e-mail"
              name="email"
            />
          </div>

          <label className="FormField__CheckboxLabe1">
            <input
              value={this.state.termsOfService}
              onChange={this.onChange}
              className="FormField__Checkbox"
              type="checkbox"
              name="termsOfService"
            />
            I agree all statements in
            <a href="#" className="FormField__TermsLink">
              terms of service
            </a>
          </label>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
