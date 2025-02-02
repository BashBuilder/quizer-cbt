import React from "react";
import Logo from "../global/logo";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-10 shadow">
      <div className="container mx-auto px-8">
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-center py-6">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Quizer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
