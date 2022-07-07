import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavigationContainer = (props) => {
  return (
    <div>
        <div className="nav-wrapper">
        <div className="left-column">
            <div className="logo">API Tester</div>
        </div>
        <div className="right-column">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">
                Home
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink exact to="/link1" activeClassName="nav-link-active">
                Link1
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink exact to="/link2" activeClassName="nav-link-active">
                Link2
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink exact to="/link3" activeClassName="nav-link-active">
                Link3
                </NavLink>
            </div>
        </div>
        </div>
    </div>
  );
};
export default withRouter(NavigationContainer);
