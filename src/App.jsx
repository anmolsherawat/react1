import React, { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);

  const addRuns = (runs) => {
    setScore(score + runs);
    setBalls(balls + 1);
  };

  return (
    <div>
      <h1>Score Board</h1>
      <h2>Score: {score}</h2>
      <h2>Balls: {balls}</h2>
      <button onClick={() => addRuns(0)}>0 run</button>
      <button onClick={() => addRuns(1)}>1 run</button>
      <button onClick={() => addRuns(2)}>2 runs</button>
      <button onClick={() => addRuns(3)}>3 runs</button>
      <button onClick={() => addRuns(4)}>4 runs</button>
      <button onClick={() => addRuns(5)}>5 runs</button>
      <button onClick={() => addRuns(6)}>6 runs</button>
    </div>
  );
};

export default App;
