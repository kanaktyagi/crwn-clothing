import { createContext, useState } from "react";


export const UserContent = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
  const [currentUser,setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}

    return <UserContent.Provider value={value}>{children}</UserContent.Provider>
}