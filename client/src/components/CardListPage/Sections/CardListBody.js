import React from "react";
import { useSelector } from "react-redux";

import "./CardListPage.scss";
import Cards from "./Cards";
import CreateCard from "../CreateCard/CreateCard";
//import Paging from "./Pagination";

const CardListBody = (props) => {
  const posts = useSelector((state) => state.post);
  // const [isShowCard, setIsShowCard] = React.useState({ isShow: false });

  // const handleShow = (isShow, card, date, ageLimit) => {
  //   setIsShowCard({
  //     ...isShowCard,
  //     isShow: isShow,
  //     card: card,
  //     date: date,
  //     ageLimit: ageLimit,
  //   });
  //   console.log(card);
  // };

  // const handleUpdate = (updateCard) => {
  //   setIsShowCard({
  //     ...isShowCard,
  //     card: updateCard,
  //   });
  // };

  // useEffect(() => {}, [isShowCard]);

  return (
    <div>
      <section>
        <div className="cardList-body">
          {posts.map((post) => (
            <Cards key={post._id} card={post} user={props.user} />
          ))}
        </div>
        <footer></footer>
      </section>
      <footer className="cardList-footer">
        {props.user && (
          <CreateCard user={props.user} className="cardList-footer" />
        )}
      </footer>
    </div>
  );
};

export default CardListBody;
