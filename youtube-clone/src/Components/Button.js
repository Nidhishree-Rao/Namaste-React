import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="m-2 px-5 py-2 rounded-lg bg-gray-200"> {name} </button>
    </div>
  )
}

export default Button