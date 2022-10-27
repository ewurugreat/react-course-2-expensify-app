import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} activeClassName="is-active" to="/">Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
      

    </header>

);

export default Header;