"use client";
import { navLinks } from "@/data/links";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-6 max-md:hidden">
      {navLinks.map((link, index) => (
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
