import React, { useState, useEffect } from "react";
import "./CardListPage.scss";
import Cards from "./Cards";
import CreateCard from "../CreateCard/CreateCard";
import Paging from "./Pagination";

const CardListBody = (props) => {
  const [cardState, setCardState] = useState({ cardId: 1, cardList: [] });

  const getCardState = (newCard) => {
    const list = [...cardState.cardList];
    newCard.id = cardState.cardId;
    list.push(newCard);
    setCardState({
      ...cardState,
      cardId: cardState.cardId + 1,
      cardList: list,
    });
  };

  useEffect(() => {}, [cardState]);
  const cardList = cardState.cardList.map((card) => (
    <Cards key={card.id} card={card} />
  ));

  return (
    <div>
      <section>
        <div className="cardList-body">{cardList}</div>
        <footer>
          <Paging />
        </footer>
      </section>
      <footer className="cardList-footer">
        <CreateCard getCardState={getCardState} />
      </footer>
    </div>
  );
};

export default CardListBody;
