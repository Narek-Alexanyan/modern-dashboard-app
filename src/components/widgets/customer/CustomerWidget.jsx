import React from "react";
import WidgetBox from "../WidgetBox";
import MenuIcon from "../../UI/icons/MenuIcon";
import CustomersChart from "./CustomersChart";
import { TotalCustomerSeries, MonthSeries } from "./chart.config";

const CustomerWidget = () => {
  return (
    <WidgetBox width='100%'>
      <div className='flex items-center justify-between'>
        <h4 className='typography--variant-subheading1'>Top Agent</h4>
        <div className='cursor-pointer'>
          <MenuIcon />
        </div>
      </div>
      <div className='mt-5 flex flex-col gap-8'>
        <CustomersChart
          title='Total Customers'
          value='5007'
          percentage='21.77'
          series={TotalCustomerSeries}
        />
        <div className='w-full h-[2px] bg-default-border-color'></div>
        <CustomersChart
          title='New Customers This Month'
          value='12'
          percentage='2.77'
          series={MonthSeries}
        />
      </div>
    </WidgetBox>
  );
};

export default CustomerWidget;
