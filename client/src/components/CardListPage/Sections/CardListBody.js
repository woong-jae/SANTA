import React from "react";
import { useSelector } from "react-redux";

import "./CardListPage.scss";
import Cards from "./Cards";
import CreateCard from "../CreateCard/CreateCard";
import InfoIcon from "@material-ui/icons/Info";
//import Paging from "./Pagination";

const CardListBody = (props) => {
  const posts = useSelector((state) => state.post);

  return (
    <div>
      <section>
        {posts.length > 0 ? (
          <div className="cardList-body">
            {posts.map((post, index) => (
              <Cards key={post._id} card={post} user={props.user} index={index} />
            ))}
          </div>
        ) : (
          <div id="body-nocard">
            <strong>
              <InfoIcon style={{ marginBottom: "4px" }} /> 검색 조건에 해당하는
              모임이 없습니다.. 직접 모임을 생성해 보세요!
            </strong>
          </div>
        )}
        <footer></footer>
      </section>
      <footer className="cardList-footer">
        <CreateCard user={props.user} className="cardList-footer" />
      </footer>
    </div>
  );
};

export default CardListBody;
