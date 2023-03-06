import React, { memo } from "react";
import PaymentIcon from "./PaymentIcon";
import AppUpdateIcon from "./AppUpdateIcon";
import CalendarIcon from "./CalendarIcon";

const NotificationIcon = memo(({ type, status }) => {
  const payment = () => {
    return (
      <div
        className={`w-10 h-10 rounded-md flex justify-center items-center ${
          status === "success" ? "bg-success" : "bg-danger"
        }`}
      >
        <PaymentIcon />
      </div>
    );
  };

  const appUpdate = () => {
    return (
      <div className={`w-10 h-10 rounded-md flex justify-center items-center bg-primary`}>
        <AppUpdateIcon />
      </div>
    );
  };

  const booking = () => {
    return (
      <div
        className={`w-10 h-10 rounded-md flex justify-center items-center ${
          status === "success" ? "bg-book-success" : "bg-danger"
        }`}
      >
        <CalendarIcon />
      </div>
    );
  };

  if (type === "payment") {
    return payment();
  } else if (type === "app-update") {
    return appUpdate();
  } else if (type === "booking") {
    return booking();
  }
});

export default NotificationIcon;
