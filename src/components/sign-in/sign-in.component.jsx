import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.util'
import './sign-in.styles.scss' ;

const SignIn = () => {

  const [userCredentials,setUserCredentials] = useState({email:'',password:''});

  const {email,password} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email,password);
      setUserCredentials({email:'',password:''});
    } catch(err){
      console.log(err);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({...userCredentials,[name]:value})
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className="buttons">
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;