import "./Round.css";

type RoundProps = {
  colors: Array<string>;
};

export default function Round({ colors }: RoundProps) {
  return (
    <>
      <div className="round-table">
        {colors.map((color) => (
          <div key={color} className="column">
            <div className="column-header">{color}</div>
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
