import React, { useState } from 'react';

const ColorPick = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColors && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                marginRight: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div style={{ marginTop: '10px' }}>
          Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </div>
      )}
    </div>
  );
};

export default ColorPick;
