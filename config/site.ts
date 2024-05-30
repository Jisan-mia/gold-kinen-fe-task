import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kotha App",
  author: "jisanmia",
  description: "Kotha app an Q&A app",
  keywords: ["q&a", "quesiton", "answer", "forum"],
  url: {
    base: `${process.env.NEXT_PUBLIC_APP_URL}`,
    author: "https://jisan.io",
  },
  links: {
    github: "https://github.com/Jisan-mia/gold-kinen-fe-task",
  },
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
