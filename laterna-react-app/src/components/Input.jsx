import React from 'react';
import './Input.scss';

const Input = ({ label, type, labelStyle, inputStyle }) => {

  return (
    <div className="InputWrapper">
      <label style={labelStyle} >{label}</label>
      <input type={type} style={inputStyle} />
    </div>
  )
}

export default Input;