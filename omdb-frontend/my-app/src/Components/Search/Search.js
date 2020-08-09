import React from 'react';
import './Search.css';

export default function Search(props) {
  const value = props.value;
  const handleChange = (e) => props.onChange(e.target.value);
  const handleSubmit = () => {
    props.onSubmit(value)
  };

  const keyPress = (e) => {
    if(e.keyCode === 13){
      props.onSubmit(value)
    }
  };

  return (
    <div className="background">
      <input className="search clear-margin-top" type="text" value={value} onChange={handleChange} onKeyDown={keyPress} />
      <button className="btn btn-success clear-margin-top" onClick={handleSubmit} >Search</button>
    </div>
  )
}