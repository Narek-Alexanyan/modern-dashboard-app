import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import DashboardIcon from "../UI/icons/sidebar/DashboardIcon";
import PropertyIcon from "../UI/icons/sidebar/PropertyIcon";
import AgentIcon from "../UI/icons/sidebar/AgentIcon";
import ReviewIcon from "../UI/icons/sidebar/ReviewIcon";
import MessageIcon from "../UI/icons/sidebar/MessageIcon";
import ProfileIcon from "../UI/icons/sidebar/ProfileIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es";
import { setIsSidebar } from "../../features/navbar/navbarSlice";

const sidebarList = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Property",
    icon: PropertyIcon,
    link: "/property",
  },
  {
    id: 3,
    title: "Agent",
    icon: AgentIcon,
    link: "/agent",
  },
  {
    id: 4,
    title: "Review",
    icon: ReviewIcon,
    link: "/review",
  },
  {
    id: 5,
    title: "Message",
    icon: MessageIcon,
    link: "/message",
  },
  {
    id: 6,
    title: "My Profile",
    icon: ProfileIcon,
    link: "/profile",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebar = useSelector((state) => state.navbar.isSidebar);

  const isMobileScreen = useMediaQuery("(max-width: 567px)");

  useEffect(() => {
    if (isMobileScreen) {
      dispatch(setIsSidebar(false));
    } else dispatch(setIsSidebar(true));
  }, [isMobileScreen]);

  return (
    <div className={`transition-width ease-linear ${isSidebar ? "w-[250px]" : "w-0 opacity-0"}`}>
      <div className='w-full h-full bg-default-white dark:bg-app-bg-dark py-6 px-4'>
        <div className='flex flex-col'>
          {sidebarList.map((item) => (
            <NavLink key={item.id} to={item.link}>
              {({ isActive }) => (
                <SidebarItem title={item.title} link={item.link} isActive={isActive}>
                  <item.icon isActive={isActive} />
                </SidebarItem>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
