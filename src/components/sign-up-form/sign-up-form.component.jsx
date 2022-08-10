import React,{useContext, useState} from 'react'
import { UserContent } from '../../contexts/user.context';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email,password,confirmPassword} = formFields;
    
    const {setCurrentUser} = useContext(UserContent)
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
        if(password !== confirmPassword) {
            alert("password doesn't match")
            return;
        }
        try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocumentFromAuth(user,{displayName})
        resetFormFields();

        } catch(error){
     console.log("handleSubmit failed", error)
        }
    }
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account</h2>
        <span >Sign up with email and password</span>
         <form onSubmit={handleSubmit}>
           <FormInput
            label="Display Name"   
             type="text" 
             name= 'displayName'
             value={displayName}
             onChange={handleChange}
            required
            />
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
            <FormInput
            label="Confirm Password"
             type="password"
             name="confirmPassword"
             onChange={handleChange}
             value={confirmPassword}
             required/>
            {/* <button type="submit" > Sign Up </button> */}
            <Button type="submit"> Sign Up</Button>
         </form>
    </div>
  )
}

export default SignUpForm