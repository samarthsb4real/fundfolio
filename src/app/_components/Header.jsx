"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {

  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center text-2xl space-x-2 ">
        <Image src={`/favicon.ico`} className="rounded-full" height={45} width={45} />

        <span className="font-bold">FundFolio</span>
      </div>
      {isSignedIn ? (
        <div className="flex flex-row items-center space-x-4">
        <UserButton className="border"/>
        <h1 className="text-gray-700">Welcome, {user?.fullName}</h1>
        <Button><Link href="/dashboard">View Dashboard</Link></Button>
        </div>
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-md">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-md">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
