import React from 'react'

const Button = ({name, children}) => {
  return (
    <>
    <div>{name}</div>
    <div>{children}</div>

    </>
  )
}

export default Button