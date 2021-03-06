import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../custom-btn/Button';
import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    );
  }
};

export default SignIn;