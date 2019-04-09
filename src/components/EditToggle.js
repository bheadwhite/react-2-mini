import React from 'react';

const editToggle = (props) => {
  
  return (
    <select 
      className="dropDownContainer ml0" 
      onChange={props.update}
      >
      <option name="edit" value={true}>Allow Edit</option>
      <option name="edit" value={false}>Disable Edit</option>
    </select>
  )
}

export default editToggle