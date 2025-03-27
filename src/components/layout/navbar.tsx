"use client";
import React from "react";
import Logo from "../global/logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Sidebar } from "./sidebar";
import NavLinks from "./nav-links";
import { Logout } from "./logout";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { token, username } = useAuth();

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
          <NavLinks />
        </div>

        <div className="max-md:hidden">
          {token ? (
            <div>
              <Logout username={username} />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/auth?login=false">
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </Link>
              <Link href="/auth?login=true">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
