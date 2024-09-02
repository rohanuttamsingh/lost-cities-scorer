import { useState } from "react";
import City from "./City";
import { Color, Player, Round } from "./shared_types";
import "./RoundScore.css";

type RoundProps = {
  players: string[];
  round: Round;
  colors: Color[];
  setRoundScores: (newRoundScores: number[]) => void;
  incrementRound: () => void;
};

export default function RoundScore({
  players,
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
      <div className="player-heading">{players[player]}</div>
      <div
        className={`round-table ${
          player === 0 ? "player-turn" : "not-player-turn"
        }`}
      >
        {colors.map((color) => (
          <City
            round={round}
            key={color.name}
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
            key={color.name}
            color={color}
            updateScores={(scoreDiff: number) => updateScores(1, scoreDiff)}
          />
        ))}
      </div>
      <div className="player-select">
        <button
          onClick={() => setPlayer(0)}
          className={player === 0 ? "current-player-turn" : ""}
        >
          {players[0]}: {scores[0]}
        </button>
        <button
          onClick={() => setPlayer(1)}
          className={player === 1 ? "current-player-turn" : ""}
        >
          {players[1]}: {scores[1]}
        </button>
      </div>
      <div className="submit">
        <button onClick={submitRound}>Submit Round {round + 1}</button>
      </div>
    </>
  );
}
