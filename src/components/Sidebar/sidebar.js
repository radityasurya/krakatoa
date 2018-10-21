import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => (
  <div className="Sidebar">
    <div className="Sidebar__container">
      <div className="Sidebar__logo">
        <Link to="/" className="logo">
          Krakatoa
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/servers">Servers</Link>
          </li>
          <li>
            <Link to="/domains">Domains</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Sidebar;
