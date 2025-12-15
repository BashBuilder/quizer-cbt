import React from "react";
import Logo from "../global/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Empowering Nigerian students to achieve academic excellence
              through AI-powered learning.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  WAEC Practice
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  JAMB Practice
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  AI Tutor
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Progress Tracking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Study Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="transition-colors hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2024 QuizerGo. All rights reserved. Built with ❤️ for
            Nigerian students.
          </p>
        </div>
      </div>
    </footer>
  );
  // <footer className="bg-primary/5 py-10 shadow">
  //   <div className="container mx-auto px-8">
  //     <div className="flex items-center justify-center">
  //       <Logo />
  //     </div>
  //   </div>
  //   <div className="flex items-center justify-center py-6">
  //     <p className="text-sm text-zinc-500">
  //       &copy; {new Date().getFullYear()} Quizer. All rights reserved.
  //     </p>
  //   </div>
  // </footer
};

export default Footer;
