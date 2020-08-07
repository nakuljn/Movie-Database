import React from 'react'

export default function List2(props) {
    const elements = props.value // Array of movies
    const component = props.component; // Card component
    //console.log(elements);
    
    const createReactElement = (value) => {
    
      return React.createElement(component, { Info:value })
    }
  
    return (
      <div className="row">
        {createReactElement(elements)}
      </div>
    )
  }