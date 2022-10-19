import React, { useState, useContext } from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../button/button.component'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      console.log('ON SUBMIT HANDLER', user)

      // const response = await createUserDocumentFromAuth(user, { displayName })
      setCurrentUser(user)
      console.log('Logged User: ', currentUser)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('error creating the user', error)
      }
    }
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
    // const newObject = { ...formFields }
    // newObject[e.target.name] = e.target.value
    // setFormFields(newObject)
    // console.log(formFields)
  }
  return (
    <div className="sign-up-container">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          value={displayName}
          name="displayName"
          required
          onChange={onChangeHandler}
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          required
          onChange={onChangeHandler}
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          required
          onChange={onChangeHandler}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          required
          onChange={onChangeHandler}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignupForm
