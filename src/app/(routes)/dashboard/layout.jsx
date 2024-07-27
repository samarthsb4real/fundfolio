"use client";
import React, { useEffect } from "react";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <Sidebar />
      </div>
    </div>
  );
}
