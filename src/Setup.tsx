import { useState } from "react";
import { Player } from "./shared_types";
import "./Setup.css";

type SetupProps = {
  setPlayersGlobal: (newPlayers: string[]) => void;
  setExpandedGlobal: (newExpanded: boolean) => void;
};

export default function Setup({
  setPlayersGlobal,
  setExpandedGlobal,
}: SetupProps) {
  const [players, setPlayers] = useState(["", ""]);
  const [expanded, setExpanded] = useState(false);

  const handlePlayersInputChange = (
    player: Player,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlayers(
      players.map((playerName, i) =>
        i === player ? event.target.value : playerName
      )
    );
  };

  const handleExpandedInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpanded(event.target.checked);
  };

  const handleSubmit = () => {
    setPlayersGlobal(
      players.map((playerName, i) =>
        playerName === "" ? `Player ${i + 1}` : playerName
      )
    );
    setExpandedGlobal(expanded);
  };

  return (
    <>
      <div className="line">
        <label htmlFor="player1">Player 1: </label>
        <input
          id="player1"
          type="text"
          value={players[0]}
          onChange={(event) => handlePlayersInputChange(0, event)}
        />
      </div>
      <div className="line">
        <label htmlFor="player2">Player 2: </label>
        <input
          id="player2"
          type="text"
          value={players[1]}
          onChange={(event) => handlePlayersInputChange(1, event)}
        />
      </div>
      <div className="line">
        <label htmlFor="expanded">Expanded Edition (Add 6th city): </label>
        <input
          id="expanded"
          type="checkbox"
          checked={expanded}
          onChange={handleExpandedInputChange}
        />
      </div>
      <div className="line">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
