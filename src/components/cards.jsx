import { Link } from "react-router-dom";
import Card from "./card";
import ActiveCard from './activeCard'
import Style from "./cards.module.css";
import { useSelector } from "react-redux";

const Cards = () => {
  const { cardList } = useSelector((state) => state.cardSlice);

  return (
    <div>
            <button className={Style.newBtn}>
        <Link className="linkStyle" to="/addcard">Add new card</Link>
      </button>
      <div className={Style.activCardPos}>
        <h3>Your active card</h3>
        {cardList.map((activeCard, i) => {
            console.log("alla aktiva kort",activeCard);
            if(activeCard.active === true) {
            return <ActiveCard
              number={activeCard.number}
              type={activeCard.type}
              date={activeCard.date}
              ccs={activeCard.ccs}
              active={activeCard.active}
              id={activeCard.id}
              key={i}
            />
          } else {return null} }
          )}  
      </div>
      <div className={Style.cardPos}>
        {cardList.map((card, i) => {
          console.log("alla inaktiva kort", card);
          if(card.active === false) {
            return <Card
            number={card.number}
            type={card.type}
            date={card.date}
            ccs={card.ccs}
            active={card.active}
            id={card.id}
            key={i}
          />
        } else {return null}} 
        )}
      </div>
    </div>
  );
};
export default Cards;
