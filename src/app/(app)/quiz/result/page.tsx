/* eslint-disable @next/next/no-img-element */
"use client";
import Loading from "@/components/global/loading";
import { Button } from "@/components/ui/button";
import { localstore } from "@/data/constants";
import { getItem } from "@/lib/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Result() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<
    { subject: string; score: string }[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchResult = async () => {
      const storedResult = await getItem(localstore.result);
      setResult(storedResult);
      setLoading(false);
    };

    fetchResult();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center gap-3 py-10">
          <img
            src="/assets/result.png"
            alt="result image illustrator"
            className="motion-preset-bounce max-w-[24rem] object-cover"
          />
          <h2 className="text-xl">No record found</h2>
          <Link href="/quiz">
            <Button>Take a test</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8">
      <section className="grid min-h-[80vh] items-center gap-6 py-8 md:grid-cols-2">
        <div>
          <h2 className="space-y-6 text-4xl">Here is your performance</h2>
          {result?.map((res) => (
            <p
              key={res.subject}
              className="my-4 flex justify-between rounded-sm bg-primary/30 px-4 py-2 text-xl capitalize"
            >
              <span>{res.subject} </span> <span>{res.score}</span>
            </p>
          ))}
          {result && result.length > 1 && (
            <p className="my-4 flex justify-between rounded-sm bg-secondary-foreground px-4 py-2 text-2xl text-white">
              <span>Total </span>
              <span>
                {result.reduce((acc, curr) => acc + parseInt(curr.score), 0)}
              </span>
            </p>
          )}
          <div className="my-10 flex gap-10">
            <Link href="/exam">
              <Button variant="outline" size="sm">
                View Solution
              </Button>
            </Link>
            {/* <Link
              href="/jambexam"
              className="rounded-md bg-green-600 px-4 py-2 text-white"
            >
              Take Another Test
            </Link> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/result.png"
            alt="result image illustrator"
            className="motion-preset-bounce hidden w-full max-w-[28rem] object-cover object-right md:inline"
          />
        </div>
      </section>
    </div>
  );
}
