import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Subscription = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-4 h-screen overflow-auto">
      <PricingTable />
    </div>
  );
};

export default Subscription;
