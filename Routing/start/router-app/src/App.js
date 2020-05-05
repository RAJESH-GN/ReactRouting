import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route
            path="/products"
            render={(props) => <Products {...props} sortBy="value" />}
          />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Redirect from="/messages" to="/posts" />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        {/* <Route path="/" exact component={Home} /> */}
      </div>
    );
  }
}

export default App;
