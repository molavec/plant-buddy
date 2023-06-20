import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { chartSeriesData2 } from "./data";

type EChartsOption = echarts.EChartsOption;

const EChartTemp: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option: EChartsOption = {
        title: {
          text: "AVG Temperature",
        },
        textStyle: {
          color: "#2b2d42",
          fontSize: '20',
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        toolbox: {
          show: true,
          itemSize: 20,
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
        backgroundColor: "#edf2f4",
        xAxis: {
          type: "category",
          axisLabel: {
            fontSize: '20',
          },
          boundaryGap: false,
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
            formatter: "{value} °C",
            fontSize: '20',
          },
        },
        series: chartSeriesData2,
      };

      myChart.setOption(option);
    }
  }, []);

  return (
    <div id="main" ref={chartRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default EChartTemp;
