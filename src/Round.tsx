import { useState } from "react";
import City from "./City";
import "./Round.css";

type Player = 0 | 1;

type RoundProps = {
  colors: Array<string>;
};

export default function Round({ colors }: RoundProps) {
  const [player, setPlayer] = useState<Player>(0);
  const [scores, setScores] = useState([0, 0]);

  const updateScores = (player: 0 | 1, scoreDiff: number) => {
    setScores(
      scores.map((score, i) => (i === player ? score + scoreDiff : score))
    );
  };

  return (
    <>
      <div className="player-heading">Player {player + 1}</div>
      <div
        className={`round-table ${
          player === 0 ? "player-turn" : "not-player-turn"
        }`}
      >
        {colors.map((color) => (
          <City
            key={color}
            color={color}
            updateScores={(scoreDiff: number) => updateScores(0, scoreDiff)}
          />
        ))}
      </div>
      <div
        className={`round-table ${
          player === 1 ? "player-turn" : "not-player-turn"
        }`}
      >
        {colors.map((color) => (
          <City
            key={color}
            color={color}
            updateScores={(scoreDiff: number) => updateScores(1, scoreDiff)}
          />
        ))}
      </div>
      <div className="player-select">
        <button onClick={() => setPlayer(0)}>Player 1: {scores[0]}</button>
        <button onClick={() => setPlayer(1)}>Player 2: {scores[1]}</button>
      </div>
    </>
  );
}
