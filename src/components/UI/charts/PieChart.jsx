import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({ title, value, series, colors }) => {
  return (
    <div className='flex items-center justify-between w-full h-[100px] bg-default-white px-5 rounded-xl'>
      <div className='flex flex-col gap-1'>
        <p className='typography--variant-body2 font-medium'>{title}</p>
        <h4 className='typography--variant-h5 font-bold'>{value}</h4>
      </div>
      <Chart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type='donut'
        width='120px'
      />
    </div>
  );
};

export default PieChart;
