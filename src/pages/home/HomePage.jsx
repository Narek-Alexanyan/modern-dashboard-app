import React from "react";
import PieChart from "../../components/UI/charts/PieChart";
import TotalRevenueChart from "../../components/UI/charts/TotalRevenueChart";
import PropertyReferrals from "../../components/UI/charts/PropertyReferrals";
import TopAgent from "../../components/widgets/topAgent/TopAgent";
import CustomerWidget from "../../components/widgets/customer/CustomerWidget";
import SalesWidget from "../../components/widgets/sales/SalesWidget";

const HomePage = () => {
  return (
    <div className='main-pages-wrapper'>
      <h2 className='typography--variant-h5 font-bold'>Dashboard</h2>
      <div className='flex gap-6 mt-5'>
        <PieChart
          title='Properties for Sale'
          value={684}
          series={[75, 25]}
          colors={["#475BE8", "#E4E8EF"]}
        />
        <PieChart
          title='Properties for Rent'
          value={546}
          series={[60, 40]}
          colors={["#FD8539", "#E4E8EF"]}
        />
        <PieChart
          title='Total Customer'
          value={5732}
          series={[75, 25]}
          colors={["#2ED480", "#E4E8EF"]}
        />
        <PieChart title='Total City' value={90} series={[90, 10]} colors={["#FE6D8E", "#E4E8EF"]} />
      </div>
      <div className='w-full mt-5 flex gap-4'>
        <TotalRevenueChart />
        <PropertyReferrals />
      </div>
      <div className='flex mt-5 gap-4 justify-between'>
        <TopAgent />
        <CustomerWidget />
        <SalesWidget />
      </div>
    </div>
  );
};

export default HomePage;
