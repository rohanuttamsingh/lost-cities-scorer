import City from "./City";
import "./Round.css";

type RoundProps = {
  colors: Array<string>;
};

export default function Round({ colors }: RoundProps) {
  return (
    <>
      <div className="round-table">
        {colors.map((color) => (
          <City key={color} color={color} />
        ))}
      </div>
    </>
  );
}
