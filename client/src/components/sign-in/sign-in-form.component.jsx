import React, { useState, useContext } from 'react'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const signInWithGoogle = async () => {
    console.log('google')
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }
  const onSubmitSignIn = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)

      setFormFields({
        email: '',
        password: '',
      })
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('Email is not found')
          break
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        default:
          console.log(error)
      }
    }
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
    // console.log(formFields)
  }
  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitSignIn}>
        <FormInput
          label="Email"
          type="email"
          // required
          value={email}
          name="email"
          onChange={onChangeHandler}
        />

        <FormInput
          label="Password"
          type="password"
          // required
          value={password}
          name="password"
          onChange={onChangeHandler}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
