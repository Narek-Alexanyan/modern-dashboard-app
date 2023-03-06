import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "../UI/fields/SearchBar";
import Notification from "../UI/notification";
import UserAction from "./UserAction";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className='bg-default-white dark:bg-app-bg-dark py-4 pl-5 pr-12 md:pr-5'>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <Logo />
          <SearchBar value={searchValue} className='ml-24 lg:ml-3' onChange={setSearchValue} />
        </div>
        <div className='flex items-center gap-3'>
          <Notification />
          <UserAction />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
