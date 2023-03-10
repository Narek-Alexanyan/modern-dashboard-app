import React from "react";
import Ripple from "../UI/icons/loading/ripple";

const WidgetBox = ({ children, width, pending }) => {
  return (
    <div style={{ width }} className='max-w-full bg-default-white rounded-xl p-5'>
      {pending ? <Ripple /> : children}
    </div>
  );
};

export default WidgetBox;
