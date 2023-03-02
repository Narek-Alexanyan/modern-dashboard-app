import React from "react";

const BaseCheckBox = ({ label, value, onChange }) => {
  return (
    <div>
      <label className='cursor-pointer typography--variant-subheading2 flex items-center'>
        <input
          type='checkbox'
          value={value}
          className='checkbox'
          onChange={() => onChange(!value)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default BaseCheckBox;
