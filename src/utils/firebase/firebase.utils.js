import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, signInWithRedirect,GoogleAuthProvider} from 'firebase/auth'

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