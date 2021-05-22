import React from "react";
import { useSelector } from "react-redux";

import "./CardListPage.scss";
import Cards from "./Cards";
import CreateCard from "../CreateCard/CreateCard";
import Paging from "./Pagination";

const CardListBody = (props) => {
  const posts = useSelector(state => state.post);

  return (
    <div>
      <section>
        <div className="cardList-body">
          {posts.map((post) => (
            <Cards key={post._id} card={post} />
          ))}
        </div>
        <footer>
          <Paging />
        </footer>
      </section>
      <footer className="cardList-footer">
        <CreateCard/>
      </footer>
    </div>
  );
};

export default CardListBody;
