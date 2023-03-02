import React from "react";

const BaseInput = ({
  className,
  label,
  id,
  type = "text",
  placeholder,
  value,
  error,
  helperText,
  onChange,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className='typography--variant-subheading2 mb-1'>
        {label}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className='w-full h-[46px] bg-default-white dark:bg-transparent border border-default-border-color dark:border-default-border-color-dark rounded-lg p-3 text-default-black dark:text-default-white focus:outline-none placeholder:text-[#808191] placeholder:text-base'
        onChange={onChange}
      />
      <span
        className={`text-danger text-sm pl-2 transition-opacity duration-200 opacity-0 ${
          error && "opacity-100"
        }`}
      >
        {helperText}
      </span>
    </div>
  );
};

export default BaseInput;
