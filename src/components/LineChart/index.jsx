import React, { useMemo } from "react";
import ApexLineChart from "react-apexcharts";

const LineChart = () => {
  const series = useMemo(() => {
    return [
      {
        data: [500, 220, 180, 280, 210, 250, 240, 210, 100, 120, 175, 120],
      },
      {
        data: [190, 220, 220, 350, 360, 470, 410, 300, 320, 300, 300, 420],
      },
    ];
  }, []);

  const options = {
    colors: ["#4FD1C5", "#2D3748"],
    chartOptions: {
      labels: [190, 220, 220, 350, 360, 470, 410, 300, 320, 300, 300, 420],
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
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
        "Dec",
      ],
      stroke: {
        width: 4,
        curve: "smooth",
        dashArray: 5,
      },
      labels: {
        show: true,
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontWeight: 700,
        },
      },
      axisBorder: {
        show: true,
        color: "#78909C",
      },
      crosshairs: {
        show: true,
        stroke: {
          color: "#b6b6b6",
          width: 0,
          dashArray: 0,
        },
      },
      axisTicks: {
        show: false,
        borderType: "dotted",
      },
    },
    yaxis: {
      show: true,
      categories: [0, 100, 200, 300, 400, 500],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontWeight: 700,
        },
        offsetX: 5,
        offsetY: 5,
        formatter: (value) => `${parseFloat(value).toFixed(1)}`,
      },
      axisBorder: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.7,
        stops: [0, 95],
      },
    },
  };

  return (
    <ApexLineChart
      options={options}
      series={series}
      type="area"
      width="100%"
      height={310}
    />
  );
};

export default LineChart;
