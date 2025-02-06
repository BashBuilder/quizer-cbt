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
import { saveItem } from "@/lib/auth";
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
});

export type QuizType = z.infer<typeof SubjectSchema>;

export function SingleSubjectModal() {
  const { mutate: fetchRandomQuestion, isPending: isFetchingRandomQuestin } =
    useGetRandomQuestions();
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
    try {
      const loading = toast.loading("loading...");
      fetchRandomQuestion(data, {
        onSuccess(data) {
          saveItem(localstore.questions, data);
          toast.success("Starting...");
          window.location.href = "/exam";
        },
        onError(error) {
          toast.error(error.message || "Failed to fetch..");
        },
        onSettled() {
          toast.dismiss(loading);
        },
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="min-size-36 flex items-center justify-center rounded-lg bg-primary/20 p-20 text-xl text-zinc-500 shadow hover:shadow-lg">
          Single
        </button>
      </DialogTrigger>
      <DialogContent className="">
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
