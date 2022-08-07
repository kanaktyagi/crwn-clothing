import React, { useEffect } from 'react'
import SignUpForm from '../components/sign-up-form/sign-up-form.component';
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

const SignIn = () => {
   const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef =await createUserDocumentFromAuth(user);
    console.log("userDocRef userDocRef", userDocRef)
   }
   
  return (
    <>
    <div>signIn {console.log("here")}</div>
    <button onClick={logGoogleUser}>Sign in </button>
    <SignUpForm/>
    </>
  )
}

export default SignIn