import React, { useEffect } from "react";
import WidgetBox from "../WidgetBox";
import ArrowRightIcon from "../../UI/icons/ArrowRightIcon";
import SalesItem from "./SalesItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../../features/sales/salesSlice";

const SalesWidget = () => {
  const sales = useSelector((state) => state.sales.salesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  return (
    <WidgetBox width='100%'>
      <div className='flex items-center justify-between'>
        <h4 className='typography--variant-subheading1'>Latest Sales</h4>
        <div className='cursor-pointer'>
          <ArrowRightIcon />
        </div>
      </div>
      <div className='mt-5 flex flex-col gap-8'>
        {sales.map((item) => (
          <SalesItem key={item.id} salesData={item} />
        ))}
      </div>
    </WidgetBox>
  );
};

export default SalesWidget;
