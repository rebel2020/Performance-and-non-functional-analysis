import React from "react";
import SolidGauge from "../../../components/solidgauge";
import "./main.scss";
const HomeComponent = () => {
  const flexItems = [
    "performance",
    "accessibility",
    "best_practices",
    "s_e_o",
    "p_w_a"
  ].map(item => {
    return (
      <div key={item}>
        <SolidGauge name={item} />
      </div>
    );
  });
  return <div className="flexbox">{flexItems}</div>;
};
export default HomeComponent;
