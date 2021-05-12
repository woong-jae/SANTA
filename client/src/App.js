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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/list" component={CardListPage} />
          <Route exact path="/myPage" component={MyPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
