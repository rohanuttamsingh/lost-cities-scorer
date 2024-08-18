type ScoreboardProps = {
  scores: number[][];
};

export default function Scoreboard({ scores }: ScoreboardProps) {
  const totalScores = scores.reduce(
    (acc, roundScores) => [acc[0] + roundScores[0], acc[1] + roundScores[1]],
    [0, 0]
  );

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
