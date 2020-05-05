import React from "react";
import SideBar from "./sidebar";
import Users from "./users";
import Posts from "./posts";
import { Route, Switch } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Switch>
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default Dashboard;
