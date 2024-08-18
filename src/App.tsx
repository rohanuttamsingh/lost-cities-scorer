import { useEffect, useState } from "react";
import RoundScore from "./RoundScore";
import Scoreboard from "./Scoreboard";
import { Round } from "./shared_types";
import "./App.css";

function App() {
  const [round, setRound] = useState<Round>(0);
  const [scores, setScores] = useState<number[][]>([]);
  const colors = ["Yellow", "White", "Green", "Blue", "Red"];

  const setRoundScores = (newRoundScores: number[]) => {
    setScores(
      scores.map((roundScores, i) =>
        i === round ? newRoundScores : roundScores
      )
    );
  };

  const incrementRound = () => {
    setRound((round + 1) as Round);
  };

  const reset = () => {
    setRound(0);
    setScores([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  };

  useEffect(reset, []);

  return (
    <>
      <h1>Lost Cities Scorer</h1>

      <Scoreboard scores={scores} />

      {round <= 2 ? (
        <RoundScore
          round={round}
          colors={colors}
          setRoundScores={setRoundScores}
          incrementRound={incrementRound}
        />
      ) : (
        <button onClick={reset}>Reset</button>
      )}
    </>
  );
}

export default App;
