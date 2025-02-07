/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function JambResult() {
  // const { questionStates } = useJambContext();

  // const { subjectScore, score } = questionStates;

  return (
    <div className="container px-8">
      <section className="grid pt-32 md:grid-cols-12">
        <div className="col-span-6">
          <h2 className="mb-6 text-4xl text-green-950">
            Here is your performance
          </h2>
          {/* {subjectScore.map((suj, index) => (
            <p
              key={index}
              className="my-4 flex justify-between rounded-sm bg-green-500 px-4 py-2 text-2xl capitalize"
            >
              <span>{suj.subject} </span> <span>{suj.score}</span>
            </p>
          ))} */}
          <p className="my-4 flex justify-between rounded-sm bg-green-800 px-4 py-2 text-2xl text-white">
            <span>Total </span> <span> 135</span>
          </p>
          <div className="my-10 flex gap-10">
            <Link
              href="/jambexam"
              className="rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Check Solution
            </Link>
            <Link
              href="/jambexam"
              className="rounded-md bg-green-600 px-4 py-2 text-white"
            >
              Take Another Test
            </Link>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <img
            src="/assets/result.png"
            alt="result image illustrator"
            className="motion-preset-confetti hidden w-full max-w-[28rem] object-cover object-right md:inline"
          />
        </div>
      </section>
    </div>
  );
}
