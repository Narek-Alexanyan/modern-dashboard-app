import React from "react";

const BaseButton = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`w-full h-[46px] flex justify-center items-center ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
