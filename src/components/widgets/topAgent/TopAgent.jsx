import React, { useEffect } from "react";
import WidgetBox from "../WidgetBox";
import BaseButton from "../../UI/buttons/BaseButton";
import TopAgentItem from "./TopAgentItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchAgents } from "../../../features/agent/agentSlice";

const TopAgent = () => {
  const dispatch = useDispatch();

  const topAgents = useSelector((state) => state.agent?.agentsList.slice(0, 5));
  const status = useSelector((state) => state.agent.status);

  useEffect(() => {
    dispatch(fetchAgents());
  }, []);

  return (
    <WidgetBox width='100%' pending={status === "pending"}>
      <div className='flex items-center justify-between'>
        <h4 className='typography--variant-subheading1'>Top Agent</h4>
        <div className='w-20'>
          <BaseButton className='border border-default-border-color rounded-lg typography--variant-body2'>
            View All
          </BaseButton>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-5'>
        {topAgents.map((agent) => (
          <TopAgentItem key={agent.id} agentData={agent} />
        ))}
      </div>
    </WidgetBox>
  );
};

export default TopAgent;
