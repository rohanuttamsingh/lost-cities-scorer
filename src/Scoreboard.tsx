type ScoreboardProps = {
  scores: number[][];
  totalScores: number[];
};

export default function Scoreboard({ scores, totalScores }: ScoreboardProps) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Player 1</th>
            <th>Player 2</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((roundScores, round) => (
            <tr key={round}>
              <td>{round + 1}</td>
              <td>{roundScores[0]}</td>
              <td>{roundScores[1]}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalScores[0]}</td>
            <td>{totalScores[1]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
