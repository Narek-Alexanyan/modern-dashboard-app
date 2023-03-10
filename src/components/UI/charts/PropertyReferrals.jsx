import React from "react";
import { propertyReferralsInfo } from "../../../constants";
import ProgressBar from "./ProgressBar";

const PropertyReferrals = () => {
  return (
    <div className='p-5 bg-default-white rounded-xl w-[390px]'>
      <h5 className='typography--variant-h6'>Property Referrals</h5>
      <div className='flex flex-col gap-4 my-5'>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </div>
    </div>
  );
};

export default PropertyReferrals;
