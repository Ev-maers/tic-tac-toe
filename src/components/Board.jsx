import React from 'react';

export default function Board({ squares, handleClick }) {
  return (
    <div style={{ display: 'inline-block', margin: '20px' }}>
      <div style={{ display: 'flex' }}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div style={{ display: 'flex' }}>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div style={{ display: 'flex' }}>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '60px',
        height: '60px',
        margin: '4px',
        fontSize: '20px'
      }}
    >
      {value}
    </button>
  );
}