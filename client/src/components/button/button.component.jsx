import React from 'react'
import './button.styles.scss'
const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-up',
  inverted: 'inverted',
}
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>
      {children}
    </button>
  )
}

export default Button
