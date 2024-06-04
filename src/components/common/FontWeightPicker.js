import React, { useState } from 'react';

const FontWeightPicker = () => {
  const [fontWeight, setFontWeight] = useState('normal');

  const handleFontWeightChange = (event) => {
    setFontWeight(event.target.value);
  };

  return (
    <div className="font-weight-picker-container">
      <h2>Font Weight Picker</h2>
      <select value={fontWeight} onChange={handleFontWeightChange}>
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        <option value="bolder">Bolder</option>
        <option value="lighter">Lighter</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
      </select>
      <p style={{ fontWeight }}>Selected Font Weight: {fontWeight}</p>
    </div>
  );
};

export default FontWeightPicker;
