import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      You Seem Lost
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default page;
