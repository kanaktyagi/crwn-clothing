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
    console.log("formFields", formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) => {
            const {name,value} = event.target;
            console.log("typeofname" ,typeof name, [name])
           setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log("response", response)
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
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
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