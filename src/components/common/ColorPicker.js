import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-container">

      <label>Select Color: </label>
      <input 
        type="color" 
        value={color} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default ColorPicker;
