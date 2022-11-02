// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

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

const provider = new GoogleAuthProvider() // create a class with google

provider.setCustomParameters({
  prompt: 'select_account', // forces user to select a email account
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// creating database
export const db = getFirestore()

// create a collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db) //

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  // const categoryMap = querySnapshot.docs.reduce((acc, category) => {
  //   const { title, items } = category
  //   acc[title.toLowerCase()] = items
  //   return acc
  // }, {})
  // return categoryMap
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef) // does this instance exist in our database?

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
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  // if user data does not exist
  return userDocRef
}
// interface helper function

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

// run when a user is logged/signed out
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
