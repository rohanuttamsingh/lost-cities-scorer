import { useEffect, useState } from "react";
import { Color } from "./shared_types";
import "./City.css";

type Card = {
  value: number;
  played: boolean;
};

type CityProps = {
  round: number;
  color: Color;
  updateScores: (scoreDiff: number) => void;
};

export default function City({ round, color, updateScores }: CityProps) {
  const [numHandshakes, setNumHandshakes] = useState(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [score, setScore] = useState(0);

  const incrementHandshakes = () => {
    setNumHandshakes(numHandshakes >= 3 ? 0 : numHandshakes + 1);
  };

  const toggleCardPlayed = (index: number) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, played: !card.played } : card
      )
    );
  };

  const reset = () => {
    setNumHandshakes(0);
    setCards(
      [...Array(9).keys()].map((value) => ({
        value: value + 2,
        played: false,
      }))
    );
    setScore(0);
  };

  useEffect(reset, [round]);

  useEffect(() => {
    let newScore = 0;
    const numPlayed =
      numHandshakes + cards.reduce((acc, card) => acc + Number(card.played), 0);
    if (numPlayed > 0) {
      const total = cards.reduce(
        (acc, card) => acc + (card.played ? card.value : 0),
        0
      );
      newScore = (total - 20) * (numHandshakes + 1) + (numPlayed >= 8 ? 20 : 0);
    }
    if (newScore !== score) {
      setScore(newScore);
      updateScores(newScore - score);
    }
  }, [cards, numHandshakes, score, updateScores]);

  const playedStyle = {
    backgroundColor: color.hex,
  };

  const unplayedStyle = {
    borderColor: color.hex,
    borderRadius: "3px",
  };

  return (
    <div className="city">
      <div className="city-color">{color.name}</div>
      <button
        onClick={incrementHandshakes}
        style={numHandshakes === 0 ? unplayedStyle : playedStyle}
      >
        {numHandshakes === 0 ? "_" : "H".repeat(numHandshakes)}
      </button>
      {cards.map((card, index) => (
        <button
          key={card.value}
          onClick={() => toggleCardPlayed(index)}
          style={card.played ? playedStyle : unplayedStyle}
        >
          {card.value}
        </button>
      ))}
      <div>{score}</div>
    </div>
  );
}
