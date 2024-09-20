import React, { useState } from 'react';

const PigGame = () => {
  const [level, setLevel] = useState(0);
  const [pigSize, setPigSize] = useState(150);

  const feedPig = (foodValue) => {
    const newLevel = level + foodValue;
    setLevel(newLevel);

   
    setPigSize(150 + newLevel);

    
  };

  const pigImage =
    level > 100
      ? '12496e34-376f-4b61-a4bb-03781b0b0eef.jpg' 
      : 'ce7532a03eba3a97e37a94a7e9efdd86.jpg'; 
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>เกมส์เลี้ยงหมู</h1>
      <img
        src={pigImage}
        alt="หมู"
        style={{ width: `${pigSize}px`, transition: 'width 0.3s ease' }}
      />
      <p>เลเวล: {level}</p>

      <button onClick={() => feedPig(5)} style={buttonStyle}>
        แตงโม (+5)
      </button>
      <button onClick={() => feedPig(10)} style={buttonStyle}>
        ฟักทอง (+10)
      </button>
      <button onClick={() => feedPig(20)} style={buttonStyle}>
        หญ้า (+20)
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default PigGame;
