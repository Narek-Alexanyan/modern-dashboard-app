import React, { useState, useRef, useEffect, memo } from "react";
import PopupWrapper from "../modals/PopupWrapper";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useSelector, useDispatch } from "react-redux";
import NotificationList from "./NotificationList";
import { fetchNotifications } from "../../../features/user/userSlice";

const Notification = memo(() => {
  const dispatch = useDispatch();

  const [isPopup, setIsPopup] = useState(false);
  const notRef = useRef(null);
  const notifications = useSelector((state) => state.user.notifications);

  useOnClickOutside(notRef, () => setIsPopup(false));

  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  return (
    <div ref={notRef} className='relative w-6 h-6'>
      <div onClick={() => setIsPopup(!isPopup)}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='cursor-pointer'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 14.5959C2.07459e-06 14.2151 0.154705 13.8506 0.428635 13.586L1.45759 12.5922C1.84928 12.2139 2.06977 11.6922 2.06814 11.1476L2.05867 7.9946C2.04543 3.58319 5.61789 0 10.0293 0C14.4314 0 18 3.56859 18 7.97067L18 11.1716C18 11.702 18.2107 12.2107 18.5858 12.5858L19.5858 13.5858C19.851 13.851 20 14.2107 20 14.5858C20 15.3668 19.3668 16 18.5858 16H14C14 18.2091 12.2091 20 10 20C7.79086 20 6 18.2091 6 16H1.40408C0.628628 16 0 15.3714 0 14.5959ZM8 16C8 17.1046 8.89543 18 10 18C11.1046 18 12 17.1046 12 16H8ZM16 11.1716C16 12.2324 16.4214 13.2499 17.1716 14L2.87851 14C3.64222 13.246 4.07136 12.2161 4.06813 11.1416L4.05867 7.9886C4.04875 4.6841 6.7248 2 10.0293 2C13.3268 2 16 4.67316 16 7.97067L16 11.1716Z'
            fill='#808191'
          />
        </svg>
      </div>

      {notifications.length > 0 && (
        <span className='absolute top-0 right-[3px]'>
          <svg
            width='7'
            height='7'
            viewBox='0 0 7 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='3.5' cy='3.5' r='3.5' fill='#EB5757' />
          </svg>
        </span>
      )}
      <PopupWrapper
        isOpen={isPopup}
        className='w-[410px] top-14 -right-[205px] md:-right-[64px] md:w-[340px]'
      >
        <NotificationList list={notifications} />
      </PopupWrapper>
    </div>
  );
});

export default Notification;
