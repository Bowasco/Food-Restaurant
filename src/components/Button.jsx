import React from 'react'

const Button = ({textContent, className}) => {
  return (
    <div>
        <button className={className}>{textContent}</button>
    </div>
  )
}

export default Button