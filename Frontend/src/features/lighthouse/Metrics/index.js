import React from "react";
import Select from "../../../components/selectlist";
import Datalist from "../../../components/datalist";
import HighStock from "../../../components/highstock";
import "Src/main.scss";

const MetricComponent = props => {
  const { metric } = props;
  return (
    <>
      <div className="row flexbox">
        <Datalist listId="suburls" options={[]} />
        <Select options={["a", "b"]} />
      </div>
      <HighStock metric={metric} />;
    </>
  );
};

export default MetricComponent;
