import { PopularTopicItem, SidebarNavItem } from "@/types";
import { Home, PieChart, SquareGanttChart } from "lucide-react";

export const sidebarNavItems: SidebarNavItem[] = [
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

export const popularTopicsList: PopularTopicItem[] = [
  {
    id: 1,
    topic: "General",
    topicColor: "#4991E3",
    slug: "/topic/general",
    offset: 0,
  },
  {
    id: 2,
    topic: "Algorithms",
    topicColor: "#FFDD4B",
    slug: "/topic/algorithms",
    offset: 10,
  },
  {
    id: 3,
    topic: "Computer Science",
    topicColor: "#C082ED",
    slug: "/topic/computer-science",
    offset: 20,
  },
  {
    id: 4,
    topic: "Dad Jokes",
    topicColor: "#F77390",
    slug: "/topic/dad-jokes",
    offset: 30,
  },
  {
    id: 5,
    topic: "Design",
    topicColor: "#FFD000",
    slug: "/topic/design",
    offset: 40,
  },
];
