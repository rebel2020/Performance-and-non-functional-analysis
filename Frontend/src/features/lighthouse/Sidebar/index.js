import React, { useState } from "react";
import Button from "../../../components/button";
// import Link from "../../../components/Link";

import "./main.scss";

const Sidebar = props => {
  let { toggle, setToggle, component, changeComponent } = props;
  let sideClass = toggle ? "sidenav" : "sidenav-collapse";
  return (
    <div className={sideClass}>
      <Button
        className="sidelink"
        onClick={() => setToggle(toggle ? false : true)}
      >
        {toggle ? "X" : "="}
      </Button>
      {/* <Link className="sidelink" to="/">
        <div className="sidelink">{toggle ? "Home" : ""}</div>
      </Link>
      <Link className="sidelink" to="/">
        <div className="sidelink">{toggle ? "Performance" : ""}</div>
      </Link> */}
      <Button className="sidelink" onClick={() => changeComponent("home")}>
        {toggle ? "Home" : ""}
      </Button>
      <Button
        className="sidelink"
        onClick={() => changeComponent("performance")}
      >
        {toggle ? "Performance" : ""}
      </Button>
      <Button
        className="sidelink"
        onClick={() => changeComponent("performance")}
      >
        {toggle ? "Accessibility" : ""}
      </Button>
    </div>
  );
};

export default Sidebar;
