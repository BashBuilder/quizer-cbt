"use client";

import { useEffect, useState } from "react";
import LoginUser from "./login";
import SignupUser from "./signup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const login = Boolean(searchParams.get("login"));
    setIsLogin(login);
  }, [searchParams]);

  return (
    <section className="h-screen items-center justify-center p-0 md:flex">
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden md:h-[500px] md:w-11/12 md:max-w-4xl md:rounded-3xl md:bg-violet-50">
        <div
          className={cn(
            "absolute h-[110%] w-[150%] rounded-full bg-primary transition-all duration-1000 ease-in-out md:top-1/2 md:w-full md:-translate-y-1/2 md:rounded-[10rem]",
            {
              "bottom-[60%] md:-left-1/2": isLogin,
              "-bottom-[70%] md:left-1/2": !isLogin,
            },
          )}
        />
        <div className="relative h-full">
          {/* Login */}
          <article
            className={cn("absolute left-0 grid h-full w-full md:grid-cols-2", {
              "z-30": isLogin,
              "z-10": !isLogin,
            })}
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-4 delay-500",
                {
                  "pointer-events-none opacity-0": !isLogin,
                },
              )}
            >
              <h1 className="text-white">Quizer</h1>
              <Button
                className="border-2 border-white bg-transparent font-semibold text-white transition duration-300 hover:border-violet-400 hover:bg-violet-400"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </Button>
            </div>
            <LoginUser isLogin={isLogin} />
          </article>

          {/* sign up */}
          <article className="relative z-20 grid h-full md:grid-cols-2">
            <SignupUser isLogin={isLogin} />
            <div
              className={cn(
                "flex flex-col items-center gap-4 delay-300 md:justify-center",
                {
                  "pointer-events-none opacity-0": isLogin,
                },
              )}
            >
              <h1 className="text-white">Quizer</h1>
              <Button
                className="border-2 border-white bg-transparent font-semibold text-white transition duration-300 hover:border-violet-400 hover:bg-violet-400"
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
