import  './input.css';

import React from 'react'

const Input = ({ text, result}) => {
  return (
    <div className="input">
     
        <div className="result">
            <h1>{result}</h1>
        </div>
        <div className="text">
    <h5>{text}</h5>
        </div>
    </div>
  )
}

export default Input