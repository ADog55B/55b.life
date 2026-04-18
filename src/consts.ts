import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "55b.life",
  EMAIL: "pipineko@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "主页",
  DESCRIPTION: "About me",
};

export const BLOG: Metadata = {
  TITLE: "文章",
  DESCRIPTION: "脑袋里装的长篇大论。",
};

export const WORK: Metadata = {
  TITLE: "正发生",
  DESCRIPTION: "此刻在想什么？",
};

export const PROJECTS: Metadata = {
  TITLE: "好玩",
  DESCRIPTION: "随便你吧。",
};

export const SOCIALS: Socials = [
  { 
    NAME: "微博",
    HREF: "https://www.weibo.com/u/7754908874",
  },
  { 
    NAME: "Threads（同步微博）",
    HREF: "https://www.threads.com/@55bisacat"
  },
  { 
    NAME: "Instagram",
    HREF: "https://www.instagram.com/55bisacat/"
  },
  { 
    NAME: "豆瓣",
    HREF: "https://www.douban.com/people/128785937/",
  },  
  { 
    NAME: "小红书",
    HREF: "https://xhslink.com/m/52zmvxUd7Nw",
  },  
  { 
    NAME: "播客《非必要不》",
    HREF: "https://www.xiaoyuzhoufm.com/podcast/643446bea79cc8147028b723",
  },  
  { 
    NAME: "公众号 妙控猫咪（请手动搜索）",
    HREF: " ",
  }
];
