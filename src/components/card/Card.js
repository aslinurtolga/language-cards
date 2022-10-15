import "./Card.css";
import { languages } from "../../helper/data";
import Item from "../item/Item";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="title-container"></div>
        <h1 className="language-title">Languages</h1>
        <div className="cards-container">
          {languages.map((item, id) => {
            return <Item card={item} key={id} />;
          })}
        </div>
    </div>
  );
};

export default Card;
