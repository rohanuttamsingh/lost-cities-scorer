import { useState } from "react";
import City from "./City";
import "./Round.css";

type RoundProps = {
  colors: Array<string>;
};

export default function Round({ colors }: RoundProps) {
  const [score, setScore] = useState(0);

  const updateScore = (scoreDiff: number) => {
    setScore(score + scoreDiff);
  };

  return (
    <>
      <div className="round-table">
        {colors.map((color) => (
          <City key={color} color={color} updateScore={updateScore} />
        ))}
      </div>
      <div>Round: {score}</div>
    </>
  );
}
