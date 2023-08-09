import { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button';


import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAngPassword,
} from '../../utils/firebase/firebase';

import {SignUpContainer, BtnContainer} from './sign-in-form.styles.jsx';

const deafaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(deafaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(deafaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAngPassword(
        email,
        password
      );
      
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break
        case 'auth/user-not-found':
          alert('User not found');
          break
        case 'auth/too-many-requests':
          alert('Too many attempts');
          break
        default:
          console.log(error);
        };
        resetFormFields();
      // if (error.code === 'auth/wrong-password') { 
      //   alert('Incorrect Password');
      // } else if (error.code === 'auth/user-not-found') {
      //   alert('User not found');
      // }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in  with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type="email"
          onChange={handleChange}
          name='email' value={email}
          required 
        />
        
        <FormInput
          label='Password'
          type="password"
          onChange={handleChange}
          name='password'
          value={password}
          required 
        />
        <BtnContainer>
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign In</Button>
        </BtnContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;