import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const links = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "panel admin", path: "/admin" }
];

const Menu = () => {
  const nav = links.map(link => (
    <li key={link.name}>
      <NavLink to={link.path} exact={link.exact ? link.exact : false}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className="nav">{nav}</ul>
    </nav>
  );
};

export default Menu;
