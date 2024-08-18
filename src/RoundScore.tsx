import { useState } from "react";
import City from "./City";
import { Player, Round } from "./shared_types";
import "./RoundScore.css";

type RoundProps = {
  round: Round;
  colors: Array<string>;
  setRoundScores: (newRoundScores: number[]) => void;
  incrementRound: () => void;
};

export default function RoundScore({
  round,
  colors,
  setRoundScores,
  incrementRound,
}: RoundProps) {
  const [player, setPlayer] = useState<Player>(0);
  const [scores, setScores] = useState([0, 0]);

  const updateScores = (player: Player, scoreDiff: number) => {
    setScores(
      scores.map((score, i) => (i === player ? score + scoreDiff : score))
    );
  };

  const submitRound = () => {
    setRoundScores(scores);
    incrementRound();
    setPlayer(0);
    setScores([0, 0]);
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
            round={round}
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
            round={round}
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
      <div className="submit">
        <button onClick={submitRound}>Submit Round {round + 1}</button>
      </div>
    </>
  );
}
