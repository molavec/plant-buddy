import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { chartSeriesData } from "./data";

interface EChartProps {
  data: any[];
}

const EChartPH: React.FC<EChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    const options = {
      animationDuration: 1000,
      title: {
        text: "PH Variation",
      },
      textStyle: {
        color: "#2b2d42",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Planta 1"],
      },
      backgroundColor: "#edf2f4",
      toolbox: {
        show: true,
        itemSize: 20,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
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
      },
      series: chartSeriesData,
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default EChartPH;
