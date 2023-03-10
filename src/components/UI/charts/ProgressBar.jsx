import React from "react";

const ProgressBar = ({ title, percentage, color }) => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <p className='typography--variant-subheading1'>{title}</p>
        <p className='typography--variant-subheading1'>{percentage}%</p>
      </div>
      <div className='rounded-md bg-light-gray relative mt-2 w-full h-2 overflow-hidden'>
        <div
          style={{ width: `${percentage}%`, backgroundColor: color }}
          className='h-full absolute'
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
