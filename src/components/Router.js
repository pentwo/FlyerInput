import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import UserLogin from "./UserLogin";
import Tools from "./Tools";
import NotFount from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" comsponent={UserLogin} />
      <Route path="/account/:user" component={App} />
      <Route path="/tools" component={Tools} />
      <Route component={NotFount} />
    </Switch>
  </BrowserRouter>
);

export default Router;
