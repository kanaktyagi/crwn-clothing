import React, { useEffect } from 'react'
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
    </>
  )
}

export default SignIn