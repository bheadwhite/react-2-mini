import React from 'react';

const sizeChanger = (props) => {
  return (
    <select 
      className="dropDownContainer" 
      onChange={props.update} 
      disabled={!props.allowEdit}>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
    </select>
  )
}

export default sizeChanger