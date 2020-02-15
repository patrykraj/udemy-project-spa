import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductsListPage from "../pages/ProductsListPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const Page = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/products" component={ProductsListPage} />
    <Route path="/product/:name" component={ProductPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/admin" component={AdminPage} />
    <Route path="/login" component={LoginPage} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Page;
