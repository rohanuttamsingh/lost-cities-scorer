import "./App.css";

function App() {
  const colors = ["Yellow", "White", "Green", "Blue", "Red"];

  return (
    <>
      <h1>Lost Cities Scorer</h1>

      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Player 1</th>
            <th>Player 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <div className="round-scoring">
        {colors.map((color) => (
          <div key={color} className="round-scoring-column">
            <div className="round-scoring-column-header">{color}</div>
            <div>H</div>
            {[...Array(9).keys()].map((num) => (
              <div key={num}>{num + 2}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
