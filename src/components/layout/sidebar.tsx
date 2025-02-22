"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, User } from "lucide-react";
import Logo from "../global/logo";
import { navLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";

interface SidebarProps {
  username: string | undefined;
  token: string | undefined;
}

export function Sidebar({ username, token }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button>
          <AlignRight />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-20">
          <Logo />
        </SheetHeader>
        <div className="flex w-full flex-col items-center justify-center gap-6">
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

        <div className="mt-16">
          {token ? (
            <div className="flex flex-col gap-2">
              <p className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white">
                <User size={16} />
                {username}
              </p>
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex w-full flex-col gap-4">
              <Link href="/auth?login=false">
                <Button variant="outline" size="sm" className="w-full">
                  Register
                </Button>
              </Link>
              <Link href="/auth?login=true">
                <Button size="sm" className="w-full">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
