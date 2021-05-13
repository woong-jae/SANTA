import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CardListPage from "./components/CardListPage/CardListPage";
import MyPage from "./components/MyPage/Mypage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <LandingPage {...props} />}
          />
          <Route
            exact
            path="/login"
            component={(props) => <LoginPage {...props} />}
          />
          <Route
            exact
            path="/list"
            component={(props) => <CardListPage {...props} />}
          />
          <Route
            exact
            path="/myPage"
            component={(props) => <MyPage {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
