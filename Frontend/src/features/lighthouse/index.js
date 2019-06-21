import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import HighStock from "../../components/highstock";
import "./main.scss";

const Lighthouse = () => {
  const [toggle, setToggle] = useState(false);
  const [component, changeComponent] = useState("home");
  const map = {
    home: <Home />,
    performance: <HighStock component={component} />
  };
  const graph = map[component];
  return (
    <>
      <Sidebar
        toggle={toggle}
        setToggle={setToggle}
        component={component}
        changeComponent={changeComponent}
      />
      <div className={toggle ? "main" : "main-extend"}>{graph}</div>
    </>
  );
};

export default Lighthouse;
