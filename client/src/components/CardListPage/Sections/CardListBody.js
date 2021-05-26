import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./CardListPage.scss";
import Cards from "./Cards";
import CreateCard from "../CreateCard/CreateCard";
import ShowCard from "../ShowCard/ShowCard";
//import Paging from "./Pagination";

const CardListBody = (props) => {
  const posts = useSelector((state) => state.post);
  const [isShowCard, setIsShowCard] = React.useState({ isShow: false });

  const handleShow = (isShow, card, date, ageLimit) => {
    setIsShowCard({
      ...isShowCard,
      isShow: isShow,
      card: card,
      date: date,
      ageLimit: ageLimit,
    });
  };

  const handleUpdate = (updateCard) => {
    setIsShowCard({
      ...isShowCard,
      card: updateCard,
    });
  };

  useEffect(() => {}, [isShowCard]);

  if (!isShowCard.isShow) {
    return (
      <div>
        <section>
          <div className="cardList-body">
            {posts.map((post) => (
              <Cards key={post._id} card={post} handleShow={handleShow} />
            ))}
          </div>
          <footer></footer>
        </section>
        <footer className="cardList-footer">
          {props.user && <CreateCard user={props.user} />}
        </footer>
      </div>
    );
  }
  return (
    <ShowCard
      card={isShowCard.card}
      date={isShowCard.date}
      ageLimit={isShowCard.ageLimit}
      user={props.user}
      handleShow={handleShow}
      handleUpdate={handleUpdate}
    />
  );
};

export default CardListBody;
