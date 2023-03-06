/* eslint-disable no-unused-vars */
import React, { useState, useRef, useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux/es";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useDarkMode } from "../../hooks/useDarkMode";
import PersonIcon from "../UI/icons/PersonIcon";
import SettingsIcon from "../UI/icons/SettingsIcon";
import LogoutIcon from "../UI/icons/LogoutIcon";
import SwitchIcon from "../UI/icons/SwitchIcon";
import PopupWrapper from "../UI/modals/PopupWrapper";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserAction = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const infoRef = useRef(null);

  useOnClickOutside(infoRef, () => setIsPopup(false));

  const userInfo = useSelector((state) => state.auth.user);

  const userActions = useMemo(() => {
    return [
      {
        id: 1,
        icon: PersonIcon,
        title: "Edit Profile",
        action: () => console.log("Edit Profile"),
      },
      {
        id: 2,
        icon: SettingsIcon,
        title: "Settings",
        action: () => console.log("Settings"),
      },
      {
        id: 3,
        icon: LogoutIcon,
        title: "Logout",
        action: () => handleLogout(),
      },
      {
        id: 4,
        icon: SwitchIcon,
        title: "Dark Mode",
        action: () => toggleDarkMode(),
      },
    ];
  }, [darkMode]);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div ref={infoRef} className='relative flex items-center'>
      <div
        onClick={() => setIsPopup((prev) => !prev)}
        className='w-10 h-10 rounded-full bg-secondary-text text-2xl text-default-white dark:text-default-black uppercase flex items-center justify-center cursor-pointer'
      >
        {userInfo?.firstName.slice(0, 1)}
      </div>
      <div className='ml-2 md:hidden'>
        <h2 className='typography--variant-subheading2'>
          {userInfo?.firstName} {userInfo?.lastName}
        </h2>
        <p className='typography--variant-body2 mt-[2px]'>{userInfo?.position}</p>
      </div>
      <PopupWrapper isOpen={isPopup} className='left-0 top-16 w-[192px] md:right-0 md:left-auto'>
        {userActions?.map((item) => (
          <div
            key={item.id}
            className='group flex items-center cursor-pointer'
            onClick={() => item.action()}
          >
            <item.icon className='w-[18px] h-[18px] fill-secondary-text group-hover:fill-primary' />
            <p className='typography--variant-body2 font-medium ml-2 group-hover:text-primary'>
              {item.title}
            </p>
          </div>
        ))}
      </PopupWrapper>
    </div>
  );
});

export default UserAction;
