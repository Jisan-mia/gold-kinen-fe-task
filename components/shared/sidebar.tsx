"use client";
import { cn } from "@/lib/utils";
import { Home, PieChart, SquareGanttChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="app-layout__sidebar bg-background border-r border-border overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[calc(100vh-55px)] px-4 py-3.5">
      <ul>
        <li>
          <Link
            href={"/"}
            className={cn(
              "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5",
              {
                "bg-[#E5EBEE] hover:bg-[#E5EBEE]": pathname === "/",
              }
            )}
          >
            <Home className="size-5" />
            <span className="text-sm text-normal">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/popular"}
            className={cn(
              "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5",
              {
                "bg-[#E5EBEE] hover:bg-[#E5EBEE]": pathname === "/popular",
              }
            )}
          >
            <PieChart className="size-5" />
            <span className="text-sm text-normal">Popular</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/all"}
            className={cn(
              "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5",
              {
                "bg-[#E5EBEE] hover:bg-[#E5EBEE]": pathname === "/all",
              }
            )}
          >
            <SquareGanttChart className="size-5" />
            <span className="text-sm text-normal">All</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
