export const chartSeriesData2 = [
  {
    name: "Max",
    type: "line",
    data: [25, 21, 24, 21, 24, 22, 20],
    color: ["#8d99ae"],
    smooth: true,
    markPoint: {
      data: [
        { type: "max", name: "Max" },
        { type: "min", name: "Min" },
      ],
    },
    markLine: {
      data: [{ type: "average", name: "Avg" }],
    },
  },
  {
    name: "Min",
    type: "line",
    data: [19, 17, 16, 18, 17, 20, 16],

    fontSize: "20",
    color: ["#d90429", "#8d99ae"],

    smooth: true,
    markPoint: {
      data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
      fontSize: "20",
    },
    markLine: {
      data: [
        { type: "average", name: "Avg" },
        [
          {
            symbol: "none",
            x: "90%",
            yAxis: "max",
          },
          {
            symbol: "circle",
            label: {
              position: "start",
              formatter: "Max",
            },
            type: "max",
            name: "最高点",
          },
        ],
      ],
    },
  },
];
