// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQwp1smw5FlP5elEp_Dqq8ldK3UFsAd7M',
  authDomain: 'cwrn-clothing-ecommerce.firebaseapp.com',
  projectId: 'cwrn-clothing-ecommerce',
  storageBucket: 'cwrn-clothing-ecommerce.appspot.com',
  messagingSenderId: '192019615859',
  appId: '1:192019615859:web:60b4d445d7064d2efe5a06',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider() // create a class

provider.setCustomParameters({
  prompt: 'select_account', // forces user to select a email account
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// creating database
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef) // does this instance exist in our database?
  console.log(userSnapShot)
  console.log(userSnapShot.exists())

  // if user data exist
  if (!userSnapShot.exists()) {
    // create / set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  // if user data does not exist
  return userDocRef
}
