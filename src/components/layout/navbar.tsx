import React from "react";
import Logo from "../global/logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Sidebar } from "./sidebar";
import NavLinks from "./nav-links";
import { cookies } from "next/headers";
import { userStore } from "@/data/constants";
import { Logout } from "./logout";

const Navbar = async () => {
  const cookie = await cookies();
  const username = cookie.get(userStore.username)?.value;
  const token = cookie.get(userStore.token)?.value;

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
          <Sidebar token={token} username={username} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
