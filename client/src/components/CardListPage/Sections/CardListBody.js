import React, { useState, useEffect } from "react";
import "./CardListPage.scss";
import Cards from "./Cards";
import CreateCard from "../CreateCard/CreateCard";

const CardListBody = (props) => {
  const [cardState, setCardState] = useState({ cardList: [] });

  const getCardState = (newCard) => {
    const list = [...cardState.cardList];
    list.push(newCard);
    setCardState({
      ...cardState,
      cardList: list,
    });
  };

  useEffect(() => {}, [cardState]);

  return (
    <div>
      <section className="cardList-body">
        {cardState.cardList.map((card) => (
          <Cards card={card} />
        ))}
      </section>
      <footer className="cardList-footer">
        <CreateCard getCardState={getCardState} />
      </footer>
    </div>
  );
};

export default CardListBody;
