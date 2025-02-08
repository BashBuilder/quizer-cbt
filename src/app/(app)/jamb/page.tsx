"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subjects as availableSubjects } from "@/data/data";

export default function SetupForm() {
  const [subjects, setSubjects] = useState<string[]>(["english"]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // adjust the selected subjects
  const adjustSubject = (subject: string) => {
    setSubjects((sub) => {
      if (sub && sub.includes(subject)) {
        return sub.filter((other) => other !== subject);
      } else {
        return sub ? [...sub, subject] : [subject];
      }
    });
  };

  const startExam = async () => {
    try {
      setIsSubmitting(true);
      console.log(subjects);
    } catch (error) {
      console.error("The error from fetching is ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto my-4 grid h-fit min-h-[30rem] w-11/12 max-w-screen-lg overflow-hidden rounded-md bg-green-50/50 shadow md:grid-cols-2">
      <div>
        <img
          src="/assets/20301.jpg"
          alt="form banner"
          className="hidden h-full w-full object-cover object-center md:inline"
        />
      </div>

      <div className="flex flex-col gap-3 p-6 md:px-10 md:py-4">
        <img
          src="assets/jamblogo.png"
          alt="jamb logo"
          className="mx-auto w-32"
        />
        <h4 className="text-center"> JAMB CBT</h4>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Subjects</label>
          <ul>
            {subjects.map((subject, index) => (
              <li key={index}>
                <button
                  className="px-2 py-1 capitalize hover:shadow-none"
                  type="button"
                  disabled={subject === "english"}
                  onClick={() =>
                    setSubjects((sub) =>
                      sub.filter((other) => other !== subject),
                    )
                  }
                >
                  ✅{subject === "english" && " Use of"} {subject}
                </button>
              </li>
            ))}
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Select Subjects</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-80 w-[80vw] max-w-80 overflow-y-scroll">
              <DropdownMenuSeparator />
              {availableSubjects.map((subject, index) => (
                <div key={index}>
                  <DropdownMenuCheckboxItem
                    key={index}
                    className="capitalize"
                    checked={subjects.includes(subject.value)}
                    onCheckedChange={() => adjustSubject(subject.value)}
                    disabled={
                      subject.value === "english" ||
                      (!subjects.includes(subject.value) && subjects.length > 3)
                    }
                  >
                    {subject.label}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator key={`separator${index}`} />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button
          className="bg-green-600 hover:bg-green-500"
          type="submit"
          disabled={subjects.length !== 4}
          onClick={startExam}
        >
          {isSubmitting ? (
            <LoaderIcon className="mx-auto animate-spin" />
          ) : (
            "Start"
          )}
        </Button>
      </div>
    </div>
  );
}
