import React, { useState } from 'react';
import Board from './Board';

export default function TicTacToe() {
  const [squares, setSquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const handleClick = (index) => {
    const newSquares = [...squares];
    newSquares[index] = 'X';
    setSquares(newSquares);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Próximo Jogador: X</h2>
      <Board squares={squares} handleClick={handleClick} />
    </div>
  );
}