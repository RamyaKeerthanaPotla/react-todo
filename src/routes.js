import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { FormContent } from "./components/formContent";
import { Login } from "./components/login";
import Todo from "./components/todo";
import { NavBar } from "./components/navBar";
import { MyProfile } from "./components/my-profile";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/enterdetails" component={FormContent} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </div>
  );
};
