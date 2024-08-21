import { useEffect, useState } from "react";
import RoundScore from "./RoundScore";
import Scoreboard from "./Scoreboard";
import { Round } from "./shared_types";
import "./App.css";

function App() {
  const [round, setRound] = useState<Round>(0);
  const [scores, setScores] = useState<number[][]>([]);
  const [totalScores, setTotalScores] = useState<number[]>([]);
  const colors = ["Yellow", "White", "Green", "Blue", "Red"];

  const setRoundScores = (newRoundScores: number[]) => {
    setScores(
      scores.map((roundScores, i) =>
        i === round ? newRoundScores : roundScores
      )
    );
    setTotalScores(
      scores.reduce(
        (acc, roundScores) => [
          acc[0] + roundScores[0],
          acc[1] + roundScores[1],
        ],
        [0, 0]
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
    setTotalScores([0, 0]);
  };

  useEffect(reset, []);

  return (
    <>
      <h1>Lost Cities Scorer</h1>

      <Scoreboard scores={scores} totalScores={totalScores} />

      {round <= 2 ? (
        <RoundScore
          round={round}
          colors={colors}
          setRoundScores={setRoundScores}
          incrementRound={incrementRound}
        />
      ) : (
        <>
          <div>
            {totalScores[0] === totalScores[1]
              ? "It's a tie!"
              : `Player ${totalScores[0] > totalScores[1] ? "1" : "2"} wins`}
          </div>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </>
  );
}

export default App;
