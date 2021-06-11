import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import "./Sections/CreateCard.scss";
import SignPage from "../../SignPage/SignPage";
import Refresh from "../../common/Refresh";
import CreatePost from "../../common/CreatePost";

export default function CreateCard(props) {
  return (
    <div>
      <div className="footer-btn" style={{ display: "grid" }}>
        <Refresh />
        {props.user ? (
          <CreatePost user={props.user}/>
        ) : (
          <SignPage
            btn={
              <Fab color="primary" aria-label="add" className="add-btn">
                <AddIcon />
              </Fab>
            }
            isGoback={false}
          />
        )}
      </div>
    </div>
  );
}
