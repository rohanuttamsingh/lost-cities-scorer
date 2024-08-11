import "./App.css";
import Round from "./Round";
import Scoreboard from "./Scoreboard";

function App() {
  const colors = ["Yellow", "White", "Green", "Blue", "Red"];

  return (
    <>
      <h1>Lost Cities Scorer</h1>

      <Scoreboard />

      <Round colors={colors} />
    </>
  );
}

export default App;
