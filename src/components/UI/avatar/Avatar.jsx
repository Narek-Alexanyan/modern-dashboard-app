import React from "react";

const Avatar = ({ name }) => {
  return (
    <div className='w-10 h-10 rounded-full bg-secondary-text text-2xl text-default-white dark:text-default-black uppercase flex items-center justify-center cursor-pointer'>
      {name?.slice(0, 1)}
    </div>
  );
};

export default Avatar;
