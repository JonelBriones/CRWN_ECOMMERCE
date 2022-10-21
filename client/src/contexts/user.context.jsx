import { createContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from '../utils/firebase/firebase.utils'
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const { currentPage } = useParams()
  const navigate = useNavigate()
  const redirect = (url) => {
    navigate(url)
  }
  const value = { currentUser, setCurrentUser }
  // signOutUser()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user)
      if (user) {
        createUserDocumentFromAuth(user)
      }
      console.log('unsubscribe', user)
      setCurrentUser(user)
      if (window.location.pathname === '/auth') {
        console.log('YOU ARE ON AUTH PAGE')
        redirect('/')
      }
    })
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
