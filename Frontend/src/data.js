const lineGraphData = {
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  series: [
    {
      data: [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        295.6,
        454.4
      ]
    }
  ]
};
const ganttChartData = {
  title: {
    text: "Simple Gantt Chart"
  },

  series: [
    {
      name: "Project 1",
      data: [
        {
          id: "s",
          name: "Start prototype",
          start: Date.UTC(2014, 10, 18),
          end: Date.UTC(2014, 10, 20)
        },
        {
          id: "b",
          name: "Develop",
          start: Date.UTC(2014, 10, 20),
          end: Date.UTC(2014, 10, 25),
          dependency: "s"
        },
        {
          id: "a",
          name: "Run acceptance tests",
          start: Date.UTC(2014, 10, 23),
          end: Date.UTC(2014, 10, 26)
        },
        {
          name: "Test prototype",
          start: Date.UTC(2014, 10, 27),
          end: Date.UTC(2014, 10, 29),
          dependency: ["a", "b"]
        }
      ]
    }
  ]
};
export { lineGraphData, ganttChartData };
