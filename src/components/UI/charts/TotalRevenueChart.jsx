import React from "react";
import Chart from "react-apexcharts";
import { TotalRevenueSeries, TotalRevenueOptions } from "./chart.config";

const arrowUpIcon = (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='20' height='20' rx='10' fill='#475BE8' />
    <path
      d='M6.91046 9.30885C6.70218 9.52478 6.36449 9.52478 6.15621 9.30885C5.94793 9.09292 5.94793 8.74283 6.15621 8.5269L9.24575 5.32389C9.66231 4.89204 10.3377 4.89204 10.7542 5.32389L13.8438 8.5269C14.0521 8.74283 14.0521 9.09292 13.8438 9.30885C13.6355 9.52478 13.2978 9.52478 13.0895 9.30885L10.5333 6.65876V14.4471C10.5333 14.7524 10.2946 15 10 15C9.70545 15 9.46667 14.7524 9.46667 14.4471V6.65876L6.91046 9.30885Z'
      fill='#FCFCFC'
    />
  </svg>
);

const TotalRevenueChart = () => {
  return (
    <div className='bg-default-white rounded-xl flex-1 p-5 '>
      <h5 className='typography--variant-h6'>Total Revenue</h5>
      <div className='my-2 flex flex-wrap flex-row items-center gap-6'>
        <h3 className='typography--variant-h6'>$236,535</h3>
        <div className='flex gap-2 items-center'>
          {arrowUpIcon}
          <div>
            <p className='typography--variant-subheading2 typography--color-primary'>0.8%</p>
            <p className='typography--variant-body3'>Than Last Month</p>
          </div>
        </div>
      </div>

      <Chart series={TotalRevenueSeries} type='bar' height={310} options={TotalRevenueOptions} />
    </div>
  );
};

export default TotalRevenueChart;
