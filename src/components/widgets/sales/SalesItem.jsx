import React from "react";

const SalesItem = ({ salesData }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <img src={salesData.image} className='w-12 h-12 ' alt='sales image' />
        <div>
          <h6 className='typography--variant-subheading1'>{salesData.title}</h6>
          <p className='typography--variant-body2 mt-1'>{salesData.location}</p>
        </div>
      </div>
      <div className='text-[18px] text-primary font-bold'>+${salesData.price}</div>
    </div>
  );
};

export default SalesItem;
