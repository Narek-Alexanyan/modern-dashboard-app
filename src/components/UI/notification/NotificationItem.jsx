import React, { memo } from "react";
import NotificationIcon from "../icons/NotificationIcon";
import { getDate } from "../../../helpers/getDate";

const NotificationItem = memo(({ title, description, date, type, status }) => {
  const parsedDate = getDate(date);
  return (
    <div className='flex cursor-pointer border-b border-default-border-color pb-5'>
      <div>
        <NotificationIcon type={type} status={status} />
      </div>
      <div className='ml-3 flex flex-col gap-2 pr-3'>
        <h4 className='typography--variant-subheading2'>{title}</h4>
        <p className='typography--variant-body3'>{description}</p>
        <span className='typography--variant-subheading3'>{parsedDate}</span>
      </div>
    </div>
  );
});

export default NotificationItem;
