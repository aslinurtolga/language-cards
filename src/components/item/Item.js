import { useState } from "react";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);
  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={card.img} alt="logo" />
          <h3 className="card-title">{card.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {card.options.map((item, id) => {
            return <li key={id}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
