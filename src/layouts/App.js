import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">{<Header />}</header>
          <main className="main">
            <aside className="aside">{<Menu />}</aside>
            <section className="section">{<Page />}</section>
          </main>
          <footer className="footer">{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
