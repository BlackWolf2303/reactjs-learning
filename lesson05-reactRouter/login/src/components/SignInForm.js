import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import {Formik} from 'formik';

import {fakeAuth} from './fakeAuth';

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    let target = event.target;
    let value = target.type ==='checkbox' ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });  
    
  }
  onSubmit(event){
    const {email, password }=this.state;
    event.preventDefault();
    if(email==='haiht.aptech@gmail.com' && password==='123'){
      fakeAuth.authenticate(()=>{
        this.setState(()=> ({
          redirectToReferrer: true
        }))
      })
    } else {
      
    }  
  }

  render() {
    console.log(this.props.match);
    const {redirectToReferrer} = this.state;

    if(redirectToReferrer===true) {
      return (
        <Redirect to='/protected'/>
      );
    }else {


      
      return (
        <Formik
            initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
        >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) =>(
        <div className="FormCenter">
        <form className="FormFields" onSubmit={this.onSubmit}>
        <h3>Login to see protected!</h3>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Email
            </label>
            <input
              value={this.state.username}
              onChange={this.onChange}
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
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
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
      )}
      </Formik>
      );
    }
  }
}

export default SignInForm;
