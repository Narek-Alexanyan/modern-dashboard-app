import React from "react";
import Avatar from "../../UI/avatar/Avatar";
import MenuIcon from "../../UI/icons/MenuIcon";

const TopAgentItem = ({ agentData }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Avatar name={agentData.firstName} />
        <div>
          <h6 className='typography--variant-subheading3'>
            {agentData.firstName} {agentData.lastName}
          </h6>
          <p className='typography--variant-body3'>{agentData.position}</p>
        </div>
      </div>
      <div className='cursor-pointer'>
        <MenuIcon />
      </div>
    </div>
  );
};

export default TopAgentItem;
