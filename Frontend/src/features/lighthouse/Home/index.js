import React from "react";
import SolidGauge from "../../../components/solidgauge";
const HomeComponent = () => {
  const flexItems = [
    "performance",
    "accessibility",
    "best_practices",
    "seo",
    "pwa"
  ].map(item => <SolidGauge item={item} />);
  return <div classname="flexbox"></div>;
};
