import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";


export const UserContent = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
  const [currentUser,setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
   const unsubscribe =  onAuthStateChangeListener( (user) => {
    if(user) {
         createUserDocumentFromAuth(user);
    }
    setCurrentUser(user);
   })

   return unsubscribe
  
  }, [])

    return <UserContent.Provider value={value}>{children}</UserContent.Provider>
}