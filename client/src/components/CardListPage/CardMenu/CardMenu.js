import React from "react";

import "./Sections/CardMenu.scss";
import Menus from "../../common/Menus";
import SignPage from "../../SignPage/SignPage";

export default function CardMenu(props) {
  return (
    <div>
      {props.user ? (
        <Menus />
      ) : (
        <SignPage type={1} />
      )}
    </div>
  );
}
