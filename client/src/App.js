import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import LandingPage from "./components/LandingPage/LandingPage";
import CardListPage from "./components/CardListPage/CardListPage";
import ShowCardPage from "./components/ShowCardpage/ShowCardPage";
import MyPage from "./components/MyPage/MyPage";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Router>
          <Switch>
            <Route
              exact
              path="/list/:mountain/:date/:peopleNum"
              component={(props) => <CardListPage {...props} />}
            />
            <Route
              exact
              path="/post/:id"
              component={(props) => <ShowCardPage {...props} />}
            />
            <Route
              exact
              path="/mypage"
              component={(props) => <MyPage {...props} />}
            />
            <Route
              path="/"
              component={(props) => <LandingPage {...props} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
