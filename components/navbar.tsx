"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaLinkedin } from 'react-icons/fa';

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const navOrder = ["/", "/about", "/portfolio", "/contact"];
  const currentIdx = navOrder.indexOf(pathname);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < navOrder.length) {
      router.push(navOrder[idx]);
    }
  };

  return (
    <>
      <HeroUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">MgCode</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          justify="center"
          className="hidden sm:flex basis-3/5 sm:basis-full"
        >
          <ul className="flex items-center gap-4">
            {siteConfig.navItems.map((item, index) => (
              <NavbarItem
                key={index}
                as="li"
                className="flex items-center gap-2"
              >
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground", size: "lg" }),
                    pathname === item.href
                      ? "text-primary-500"
                      : "text-default-500",
                    "transition-colors duration-200",
                    "hover:text-primary-500"
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500 hover:text-primary-500 transition-colors duration-200" />
            </Link>
            <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
              <FaLinkedin className="w-6 h-6 text-default-500 hover:text-primary-500 transition-colors duration-200" />
            </Link>
          </NavbarItem>
          <ThemeSwitch />
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {/* {searchInput} */}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </>
  );
};
