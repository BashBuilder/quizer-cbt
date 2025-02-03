"use client";

import React from "react";
import Logo from "../global/logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Practice", href: "/quiz" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="shadow">
      <div className="flex items-center justify-center bg-primary px-6 py-2 text-white">
        <h2 className="text-sm">
          Free courses available with unlimited practice
        </h2>
      </div>
      <nav className="container mx-auto flex items-center justify-between gap-4 px-8 py-3">
        <div className="flex items-center gap-20">
          <Logo />
          <div className="flex items-center gap-6 max-md:hidden">
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
          </div>
        </div>
        <div className="flex items-center gap-4 max-md:hidden">
          <Link href="/auth?login=false">
            <Button variant="outline" size="sm">
              Register
            </Button>
          </Link>
          <Link href="/auth?login=true">
            <Button size="sm">Login</Button>
          </Link>
        </div>

        <button className="md:hidden">
          <AlignRight />
        </button>
      </nav>
    </header>
  );
};

export default Header;
