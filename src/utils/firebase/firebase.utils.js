import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithPopup,
     signInWithRedirect,
     GoogleAuthProvider,
     createUserWithEmailAndPassword
    } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSxPVD5FMcByPBirhBoanBdLqgAG0HAT4",
    authDomain: "crwn-clothing-db-1f9ba.firebaseapp.com",
    projectId: "crwn-clothing-db-1f9ba",
    storageBucket: "crwn-clothing-db-1f9ba.appspot.com",
    messagingSenderId: "45273358913",
    appId: "1:45273358913:web:86b03c4fbf7a4992e8dcc0"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(
    userAuth,
    additionalInformation={}
    ) => {
    if(!userAuth) return;
  const userDocRef = doc(db, 'user', userAuth.uid)
  console.log("usrDocRef", userDocRef)
  
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })
    }catch(error) {

    }
  }

  return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}