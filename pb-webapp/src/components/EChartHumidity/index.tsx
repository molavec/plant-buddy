import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface EChartProps {
  data: any[];
}

const EChartH: React.FC<EChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);
    const options = {
      animationDuration: 1000,
      title: {
        text: "Relative Humidity",
      },
      textStyle: {
        color: "#2b2d42",
      },
      tooltip: {
        trigger: "axis",
      },
      backgroundColor: "#edf2f4",
      toolbox: {
        show: true,
        itemSize: 15,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        data: [
          "11:00 AM",
          "11:15 AM",
          "11:30 AM",
          "11:45 AM",
          "12:00 AM",
          "12:15 AM",
          "12:30 AM",
        ],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} %",
        },
      },
      series: [
        {
          name: "Cannabis Sativa",
          data: [55, 60, 65, 60, 58, 61, 68],
          type: "line",
          smooth: true,
          color: ["#fda781"],
        },
      ],
    };
    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default EChartH;
