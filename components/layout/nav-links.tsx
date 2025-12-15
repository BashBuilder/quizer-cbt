"use client";
import { loggedInLinks, navLinks } from "@/data/links";
import { RootState } from "@/hooks/store";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();

  const links = token ? loggedInLinks : navLinks;

  return (
    <nav className="flex items-center gap-6 max-md:hidden">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors duration-300 hover:bg-primary/10",
            {
              "bg-primary/20 text-primary": pathname === link.href,
              "": pathname !== link.href,
            },
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
