import React from "react";

const SidebarItem = ({ children, title, isActive }) => {
  return (
    <div
      className={`flex items-center h-14 rounded-xl typography--variant-body1 py-4 px-6 ${
        isActive && "bg-primary !text-default-white"
      }`}
    >
      {children}
      <span className='ml-2'>{title}</span>
    </div>
  );
};

export default SidebarItem;
