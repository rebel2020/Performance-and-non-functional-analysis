import React from "react";
import Sidebar from "../../components/Sidebar";
import "./main.scss";

const Lighthouse = () => {
  return (
    <>
      <Sidebar />
      <div id="chart" className="main"></div>
    </>
  );
};

export default Lighthouse;
