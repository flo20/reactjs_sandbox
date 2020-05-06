import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Newpost from "./Newpost/Newpost";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/newpost" component={Newpost}></Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
