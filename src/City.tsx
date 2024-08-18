import { useEffect, useState } from "react";
import "./City.css";

type Card = {
  value: number;
  played: boolean;
};

type CityProps = {
  color: string;
  updateScore: (scoreDiff: number) => void;
};

export default function City({ color, updateScore }: CityProps) {
  const [numHandshakes, setNumHandshakes] = useState(0);
  const [cards, setCards] = useState<Card[]>(
    [...Array(9).keys()].map((value) => ({
      value: value + 2,
      played: false,
    }))
  );
  const [score, setScore] = useState(0);

  const handleIncrementHandshakes = () => {
    setNumHandshakes(numHandshakes >= 3 ? 0 : numHandshakes + 1);
  };

  const toggleCardPlayed = (index: number) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, played: !card.played } : card
      )
    );
  };

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
      updateScore(newScore - score);
    }
  }, [cards, numHandshakes, score, updateScore]);

  return (
    <div className="city">
      <div className="city-color">{color}</div>
      <button onClick={handleIncrementHandshakes}>
        {numHandshakes === 0 ? "_" : "H".repeat(numHandshakes)}
      </button>
      {cards.map((card, index) => (
        <button
          key={card.value}
          onClick={() => toggleCardPlayed(index)}
          className={cards[index].played ? "played" : ""}
        >
          {card.value}
        </button>
      ))}
      <div>{score}</div>
    </div>
  );
}
