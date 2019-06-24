import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import MetricComponent from "./Metrics";
import {Query} from 'react-apollo';
import {TEST} from "../../components/graphql/Queries";

import HighStock from "../../components/highstock";
import "./main.scss";

const Lighthouse = () => {
  const [toggle, setToggle] = useState(false);
  const [component, changeComponent] = useState("home");
  const map = {
    home: <Home />,
    performance: <MetricComponent metric={component} />
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
      <Query query={TEST}>
        {({loading,error,data}) => {
              if(loading) console.log("loading");
              if(error) console.log(error.message);
              if(data) console.log(data);
              return null;
        }}
      </Query>
    </>
  );
};

export default Lighthouse;
