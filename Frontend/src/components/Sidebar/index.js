import React from "react";
import Button from "../button";
import "./main.scss";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <Button name="linegraph" className="sidelink">
        Line Graph
      </Button>
      <Button name="ganttchart" className="sidelink">
        Gantt Chart
      </Button>
    </div>
  );
};

export default Sidebar;
