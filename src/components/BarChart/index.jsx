import React, { useMemo } from "react";
import ApexColumnChart from "react-apexcharts";

const BarChart = () => {
  const series = useMemo(() => {
    return [
      {
        data: [500, 220, 180, 280, 210, 250, 240, 210, 100],
      },
    ];
  }, []);

  const options = {
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
      background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      borderRadius: 15,
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
      ],
      labels: {
        show: false,
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontWeight: 700,
        },
      },
      axisBorder: {
        show: false,
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
          colors: "#fff",
          fontSize: "10px",
          fontWeight: 700,
        },
        offsetX: -2,
        offsetY: -2,
      },
      axisBorder: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["#FFFFFF"],
      opacity: 1,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "10px",
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <ApexColumnChart
      options={options}
      series={series}
      type="bar"
      width="100%"
      height={222}
    />
  );
};

export default BarChart;
