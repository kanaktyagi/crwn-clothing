import React,{useState} from 'react'
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
  
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) => {
            const {name,value} = event.target;
           setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
      const {user} = await signInAuthUserWithEmailAndPassword(email, password)
        resetFormFields();

        } catch(error){
         switch(error.code){
          case 'auth/wrong-password':
            alert("incorrect password for email")
            break;
            case 'auth/user-not-found': 
            alert('no user associated with the email')
            break;
            default: 
            console.log(error)
         }
        }
    }
    const signInWithGoogle = async() => {
      await signInWithGooglePopup();     
     }
  return (
    <div className='sign-up-container'>
        <h2>Already have an account</h2>
        <span >Sign in with email and password</span>
         <form onSubmit={handleSubmit}>
          
            <FormInput 
            label="Email"
            type="email" 
            name='email'
            value={email}
            onChange={handleChange}
            required/>
            <FormInput 
            label="Password"
            type="password" 
            name="password"
            onChange={handleChange}
            value={password}
            required/>
          
            {/* <button type="submit" > Sign Up </button> */}
            <div className='buttons-container'>
            <Button type="submit"> Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} button_type="google"> Google Sign In</Button>
            </div>
         </form>
    </div>
  )
}

export default SignInForm