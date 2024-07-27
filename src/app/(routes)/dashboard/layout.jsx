"use client";
import React, { useEffect } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardHeader />
      <div className="fixed md:w-64 hidden md:block ">
        <Sidebar />
      </div>
      
    </div>
  );
}
