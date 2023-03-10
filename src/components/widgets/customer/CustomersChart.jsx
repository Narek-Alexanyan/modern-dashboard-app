import React from "react";
import Chart from "react-apexcharts";
import { customerOptions } from "./chart.config";

const CustomersChart = ({ title, value, percentage, series }) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='typography--variant-body3'>{title}</p>
        <h4 className='typography--variant-h5 mt-3'>{value}K</h4>
        <p className='typography--variant-body3 mt-1 text-success'>{percentage}%</p>
      </div>
      <div className='w-32'>
        <Chart series={series} type='bar' height={100} options={customerOptions} />
      </div>
    </div>
  );
};

export default CustomersChart;
