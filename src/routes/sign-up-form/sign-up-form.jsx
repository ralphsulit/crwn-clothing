import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../../components/form-input/form-input';

const deafaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(deafaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(deafaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div>
      <h1>Sign up  with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type="text"
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required 
        />
        
        <FormInput label='Email' type="email" onChange={handleChange} name='email' value={email} required />
        
        <FormInput label='Password' type="password" onChange={handleChange} name='password' value={password} required />
        
        <FormInput label='Confirm Password' type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;