import React from 'react';

const colorChanger =(props) => {
  return (
    <select 
      className="dropDownContainer" 
      onChange={props.update}
      disabled={!props.allowEdit}>
      <option value="black">Black</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
  )
}

export default colorChanger