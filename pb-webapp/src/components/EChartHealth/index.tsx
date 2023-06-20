import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface EChartProps {
  data: any[];
}

const EChartHth: React.FC<EChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    //Aqui va el codigo del grafico

    const gaugeData = [
      {
        value: 20,
        name: "Ground Health",
        title: {
          offsetCenter: ["0%", "-30%"],
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ["0%", "-20%"],
        },
      },
      {
        value: 40,
        name: "Ground Humidity",
        title: {
          offsetCenter: ["0%", "0%"],
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ["0%", "10%"],
        },
      },
      {
        value: 60,
        name: "Water Quality",
        title: {
          offsetCenter: ["0%", "30%"],
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ["0%", "40%"],
        },
      },
    ];

    const options = {
      animationDuration: 1000,
      title: {
        text: "General Data",
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
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: "#464646",
            },
          },
          axisLine: {
            lineStyle: {
              width: 40,
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: gaugeData,
          title: {
            fontSize: 14,
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: "inherit",
            borderColor: "inherit",
            borderRadius: 20,
            borderWidth: 1,
            formatter: "{value}%",
          },
        },
      ],
    };

    setInterval(function () {
      gaugeData[0].value = +(Math.random() * 100).toFixed(2);
      gaugeData[1].value = +(Math.random() * 100).toFixed(2);
      gaugeData[2].value = +(Math.random() * 100).toFixed(2);
      chart.setOption<echarts.EChartsOption>({
        series: [
          {
            data: gaugeData,
            pointer: {
              show: false,
            },
          },
        ],
      });
    }, 2000);

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default EChartHth;
