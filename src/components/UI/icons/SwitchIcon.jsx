import React from "react";

const SwitchIcon = (props) => {
  return (
    <svg
      {...props}
      width='16'
      height='12'
      viewBox='0 0 16 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.5 6C0.5 3.10051 2.85051 0.75 5.75 0.75H10.25C13.1495 0.75 15.5 3.10051 15.5 6C15.5 8.8995 13.1495 11.25 10.25 11.25H5.75C2.8505 11.25 0.5 8.8995 0.5 6ZM10.25 3.375C8.80025 3.375 7.625 4.55025 7.625 6C7.625 7.44975 8.80025 8.625 10.25 8.625C11.6997 8.625 12.875 7.44975 12.875 6C12.875 4.55025 11.6997 3.375 10.25 3.375Z'
      />
    </svg>
  );
};

export default SwitchIcon;
