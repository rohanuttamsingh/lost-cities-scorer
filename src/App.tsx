import { useEffect, useState } from "react";
import RoundScore from "./RoundScore";
import Scoreboard from "./Scoreboard";
import { Round } from "./shared_types";
import "./App.css";
import Setup from "./Setup";

function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [round, setRound] = useState<Round>(0);
  const [scores, setScores] = useState<number[][]>([]);
  const [totalScores, setTotalScores] = useState<number[]>([]);

  const allColors = ["Yellow", "White", "Green", "Blue", "Red", "Purple"];
  const colors = expanded ? allColors : allColors.slice(0, -1);

  const setRoundScores = (newRoundScores: number[]) => {
    const newScores = scores.map((roundScores, i) =>
      i === round ? newRoundScores : roundScores
    );
    setScores(newScores);
    setTotalScores(
      newScores.reduce(
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

      {players.length === 0 ? (
        <Setup setPlayersGlobal={setPlayers} setExpandedGlobal={setExpanded} />
      ) : (
        <>
          <Scoreboard
            players={players}
            scores={scores}
            totalScores={totalScores}
          />

          {round <= 2 ? (
            <RoundScore
              players={players}
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
                  : `${
                      totalScores[0] > totalScores[1] ? players[0] : players[1]
                    } wins`}
              </div>
              <button onClick={reset}>Reset</button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
