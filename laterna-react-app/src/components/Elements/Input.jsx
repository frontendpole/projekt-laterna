import React from 'react';
import './Input.scss';

const Input = ({ label, type, labelStyle, inputStyle, onChange, value, name, checked }) => {

  return (
    <div className="InputWrapper">
      <label style={labelStyle} >{label}</label>
      <input type={type} style={inputStyle} onChange={onChange} value={value} name={name} checked={checked}/>
    </div>
  )
}

export default Input;