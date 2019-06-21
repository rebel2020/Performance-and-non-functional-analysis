import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import HighStock from "../HighStock";
import "./main.scss";

const Lighthouse = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <div className={toggle ? "main" : "main-extend"}>
        <HighStock />
      </div>
    </>
  );
};

export default Lighthouse;
