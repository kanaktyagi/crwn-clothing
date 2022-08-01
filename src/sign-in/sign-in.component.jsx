import React, { useEffect } from 'react'
import {signInWithGooglePopup} from '../utils/firebase/firebase.utils'

const SignIn = () => {
   const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log("response", response)
   }
   
  return (
    <>
    <div>signIn {console.log("here")}</div>
    <button onClick={logGoogleUser}>Sign in </button>
    </>
  )
}

export default SignIn