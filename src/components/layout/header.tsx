"use client";

import React from "react";
import Logo from "../global/logo";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
];

const Header = () => {
  return (
    <header className="shadow">
      <div className="flex items-center justify-center bg-primary px-6 py-2 text-white">
        <h2 className="text-sm">
          Free courses available with unlimited practice
        </h2>
      </div>
      <nav className="container mx-auto flex items-center justify-between gap-4 px-8 py-3">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="flex gap-4">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="ml-4">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/auth?login=false">
            <Button variant="outline">Register</Button>
          </Link>
          <Link href="/auth?login=true">
            <Button>Login</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
