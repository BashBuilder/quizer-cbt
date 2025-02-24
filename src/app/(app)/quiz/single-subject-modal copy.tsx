/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Logo from "@/components/global/logo";
import SelectSearch from "@/components/select-search";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { localstore } from "@/data/constants";
import { subjects } from "@/data/data";
import { removeItems, saveItem } from "@/lib/auth";
import { useGetRandomQuestions } from "@/services/questions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SubjectSchema = z.object({
  subject: z.string().min(1, "Subject is Required"),
  number: z.number().min(1, "Number is Required"),
  year: z.number().optional(),
  time: z.number(),
});

export type QuizType = z.infer<typeof SubjectSchema>;

export function SingleSubjectModal() {
  const {
    mutateAsync: fetchRandomQuestion,
    isPending: isFetchingRandomQuestin,
  } = useGetRandomQuestions();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<QuizType>({ resolver: zodResolver(SubjectSchema) });

  const setOption = (data: string) => {
    setValue("subject", data);
  };

  const onSubmit: SubmitHandler<QuizType> = async (data) => {
    const loading = toast.loading("loading...");
    try {
      removeItems();
      const payload = {
        subject: data.subject,
        number: data.number,
      };
      const timeInSeconds = data.time * 60;
      const response = await fetchRandomQuestion(payload);
      saveItem(localstore.questions, response);
      saveItem(localstore.time, timeInSeconds);
      saveItem(localstore.examStarted, true);
      toast.success("Starting...");
      window.location.href = "/exam";
    } catch (error: any) {
      toast.error(error);
    } finally {
      toast.dismiss(loading);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="min-size-36 flex items-center justify-center rounded-lg bg-secondary p-20 text-xl font-medium text-primary shadow transition-all duration-300 hover:shadow-lg max-sm:w-full">
          Single
        </button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-sm:rounded-md">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          <Logo />
          <DialogTitle className="text-center">
            Select Practice Subject
          </DialogTitle>
        </DialogHeader>

        <form
          className="grid items-center gap-4 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right">Subject</label>
            <div className="col-span-3">
              <SelectSearch setOption={setOption} data={subjects} />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="number" className="text-right">
              Number of Questions
            </label>
            <div className="col-span-3">
              <Input
                id="number"
                type="number"
                defaultValue="40"
                min={1}
                max={40}
                {...register("number", { valueAsNumber: true })}
              />
              {errors.number && (
                <p className="text-sm text-red-500">{errors.number.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="time" className="text-right">
              Time (in minutes)
            </label>
            <div className="col-span-3">
              <Input
                id="time"
                type="number"
                defaultValue="20"
                min={1}
                max={60}
                {...register("time", { valueAsNumber: true })}
              />
              {errors.time && (
                <p className="text-sm text-red-500">{errors.time.message}</p>
              )}
            </div>
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="year" className="text-right">
              Year
            </label>
            <div className="col-span-3">
              <Input
                id="year"
                type="number"
                defaultValue={2020}
                min={2000}
                max={new Date().getFullYear()}
                {...register("year", { valueAsNumber: true })}
              />
              {errors.year && (
                <p className="text-sm text-red-500">{errors.year.message}</p>
              )}
            </div>
          </div> */}
          <Button
            type="submit"
            className="mx-auto w-fit"
            disabled={isSubmitting || isFetchingRandomQuestin}
          >
            {isSubmitting || isFetchingRandomQuestin ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Start"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
