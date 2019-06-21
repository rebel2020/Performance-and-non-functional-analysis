import React, { useState } from "react";
import Button from "../button";
import "./main.scss";

const Sidebar = props => {
  // const [toggle, setToggle] = useState(false);
  let { toggle, setToggle } = props;
  let sideClass = toggle ? "sidenav" : "sidenav-collapse";
  return (
    <div className={sideClass}>
      <Button
        className="sidelink"
        onClick={() => setToggle(toggle ? false : true)}
      >
        {toggle ? "X" : "="}
      </Button>
      <Button className="sidelink">{toggle ? "Home" : ""}</Button>
      <Button className="sidelink">{toggle ? "Performance" : ""}</Button>
    </div>
  );
};

export default Sidebar;
