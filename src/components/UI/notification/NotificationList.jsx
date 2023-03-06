import React, { memo } from "react";
import NotificationItem from "./NotificationItem";

const NotificationList = memo(({ list }) => {
  return (
    <div className='flex flex-col gap-3'>
      {list.length ? (
        list.map((not) => (
          <NotificationItem
            key={not.id}
            title={not.title}
            description={not.description}
            date={not.createdAt}
            type={not.type}
            status={not.status}
          />
        ))
      ) : (
        <p className='typography--variant-body2'>You have no Notification</p>
      )}
    </div>
  );
});

export default NotificationList;
