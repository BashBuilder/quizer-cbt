"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Logo from "../global/logo";
import { navLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
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

        <div className="mt-16 flex w-full flex-col gap-4">
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
      </SheetContent>
    </Sheet>
  );
}
