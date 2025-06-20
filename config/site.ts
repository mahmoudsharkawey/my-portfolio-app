export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mahmoud Gamal | MGCODE",
  title: "MGCODE - Mahmoud Gamal's Personal Website",
  description:
    "Welcome to the personal website of Mahmoud Gamal, a software engineer and developer.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/mahmoudsharkawey",
    linkedin: "https://linkedin.com/in/mahmoud-gamal-elsharkawey",
    twitter: "",
    docs: "",
    discord: "",
    sponsor: "",
  },
};
