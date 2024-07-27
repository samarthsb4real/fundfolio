"use client";
import React, { useEffect } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <Sidebar />
      </div>
      <div className="md:ml-64 ">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
