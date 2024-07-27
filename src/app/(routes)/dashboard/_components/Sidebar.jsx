import Image from "next/image";
import react, { useEffect } from "react";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  LogOutIcon,
  IndianRupee,
  LogOut,
} from "lucide-react";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Income",
      icon: IndianRupee,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-6 border shadow-md">
      <Link href="/">
        <div className="flex flex-row items-center border p-4 rounded-xl shadow-md cursor-pointer space-x-2">
          <Image src={`/favicon.ico`} width={40} height={40} />
          <span className="text-blue-700 font-bold text-2xl">FundFolio</span>
        </div>
      </Link>

      <div className="mt-2 pt-12">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    p-4 cursor-pointer rounded-xl
                    hover:text-primary hover:bg-blue-100 hover:shadow-md
                    ${path == menu.path && "text-primary bg-blue-300"}
                    `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div
        className="fixed bottom-10 p-5 flex gap-2
            items-center"
      >
        <div
          className="p-5 flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    cursor-pointer rounded-xl
                    hover:text-primary hover:bg-red-200 hover:shadow-sm"
        >
          <LogOut />
          Logout
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
