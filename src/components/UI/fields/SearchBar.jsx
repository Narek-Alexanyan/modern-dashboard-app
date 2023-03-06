import React from "react";

const SearchBar = ({ className, value, onChange }) => {
  return (
    <div
      className={`w-[400px] max-w-full lg:w-80 md:w-full bg-app-bg-light dark:bg-bg-color-dark md:bg-transparent md:cursor-pointer h-[38px] flex items-center rounded-lg px-3 ${className}`}
    >
      <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.803 12.8637C12.0959 13.1566 12.5708 13.1566 12.8637 12.8637C13.1566 12.5708 13.1566 12.0959 12.8637 11.803L11.803 12.8637ZM10.25 6C10.25 8.34721 8.34721 10.25 6 10.25V11.75C9.17564 11.75 11.75 9.17564 11.75 6H10.25ZM6 10.25C3.65279 10.25 1.75 8.34721 1.75 6H0.25C0.25 9.17564 2.82436 11.75 6 11.75V10.25ZM1.75 6C1.75 3.65279 3.65279 1.75 6 1.75V0.25C2.82436 0.25 0.25 2.82436 0.25 6H1.75ZM6 1.75C8.34721 1.75 10.25 3.65279 10.25 6H11.75C11.75 2.82436 9.17564 0.25 6 0.25V1.75ZM12.8637 11.803L10.0719 9.01128L9.01128 10.0719L11.803 12.8637L12.8637 11.803Z'
          fill='#808191'
        />
      </svg>
      <input
        type='text'
        placeholder='Search Property, Customer etc'
        value={value}
        className='bg-transparent w-full ml-2 focus:outline-none dark:text-default-white md:hidden'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
