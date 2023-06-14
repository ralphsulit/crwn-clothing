import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAngPassword,
} from '../../utils/firebase/firebase';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-in-form.scss';

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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAngPassword(email, password);
      console.log(response);
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
    <div className='sign-up-container'>
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
        <div className='btn-container'>
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;