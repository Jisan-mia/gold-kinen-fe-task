"use client";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import { Home, PieChart, SquareGanttChart, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems: SidebarNavItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    icon: Home,
    pathnameMatcher: ["/", "/home"],
  },
  {
    id: 2,
    label: "Popular",
    link: "/popular",
    icon: PieChart,
    pathnameMatcher: ["/popular"],
  },
  {
    id: 3,
    label: "All",
    link: "/all",
    icon: SquareGanttChart,
    pathnameMatcher: ["/all"],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="app-layout__sidebar bg-background border-r border-border overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[calc(100vh-55px)] px-4 py-3.5">
      <ul>
        {sidebarNavItems.map((sidebarItem) => {
          const { icon: Icon, label, link, pathnameMatcher } = sidebarItem;
          return (
            <li key={sidebarItem.id}>
              <Link
                href={link}
                className={cn(
                  "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5",
                  {
                    "bg-[#E5EBEE] hover:bg-[#E5EBEE]":
                      pathnameMatcher.includes(pathname),
                  }
                )}
              >
                <Icon className="size-5" />
                <span className="text-sm text-normal">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bg-border/60 h-[1px] w-full my-3"></div>

      <div>
        <h3 className="flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-between px-3 py-2.5 text-sm cursor-pointer text-[##576F76] uppercase font-normal">
          Top Users
        </h3>

        <ul>
          {Array.from(Array(10).keys()).map((item) => (
            <li key={item}>
              <Link
                href={"/user/1"}
                className={cn(
                  "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5"
                )}
              >
                <UserCircle className="size-5" />
                <span className="text-sm text-normal">John Doe</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
