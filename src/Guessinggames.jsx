import React, { useState } from 'react';

function Guessinggames() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  
  const choices = ['Rock', 'Paper', 'Scissor'];

  const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

  const determineWinner = (player, computer) => {
    if (player === computer) return 'It\'s a tie!';
    if (
      (player === 'Rock' && computer === 'Scissor') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissor' && computer === 'Paper')
    ) return 'You win!';
    return 'You lose!';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const compChoice = getRandomChoice();
    setComputerChoice(compChoice);
    const outcome = determineWinner(playerChoice, compChoice);
    setResult(outcome);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPlayerChoice(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-10 bg-white pt-5 pb-5">
      <h1 className="text-4xl font-bold text-center mb-4">Can you beat me at Janken?</h1>
      <h2 className="text-xl text-center mb-4">[Rock, Paper, Scissors]</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="text-lg mb-4 flex flex-col items-center justify-center">
          Enter your pick here:
          <input
            type="text"
            value={playerChoice}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 mt-1 w-full max-w-xs"
            placeholder="Rock, Paper, or Scissor"
            autoComplete="off"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {result && (
        <div className="mt-4 text-lg text-center">
          <p>You chose: <span className="font-semibold">{playerChoice}</span></p>
          <p>Computer chose: <span className="font-semibold">{computerChoice}</span></p>
          <p className="font-bold mt-2">{result}</p>
        </div>
      )}
    </div>
  );
}

export default Guessinggames;
