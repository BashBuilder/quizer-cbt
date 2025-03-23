"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Multiselect from "@/components/multiselect";
import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { localstore, userStore } from "@/data/constants";
import { subjects } from "@/data/data";
import { removeItems, saveItem } from "@/lib/auth";
import { useGetGroupOfQuestions } from "@/services/questions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import RequireSubscription from "@/components/global/require-subscription";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateCount } from "@/hooks/features/authSlice";
import { useRouter } from "next/navigation";

const SubjectSchema = z.object({
  subjects: z.array(z.string().min(1, "Subject is Required")),
  number: z.number().min(1, "Number is Required"),
  year: z.number().optional(),
  time: z.number(),
});

export type QuizType = z.infer<typeof SubjectSchema>;

export function CustomSubjectModal() {
  const [open, setOpen] = useState(false);
  const { subscribeCount } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutateAsync: fetchGroupOfSubjects, isPending: isFetchingQuestions } =
    useGetGroupOfQuestions();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<QuizType>({ resolver: zodResolver(SubjectSchema) });

  const setOption = (data: string[]) => {
    setValue("subjects", data);
  };

  const onSubmit: SubmitHandler<QuizType> = async (data) => {
    if (!subscribeCount || !subscribeCount.practice) {
      return setOpen(true);
    }

    const loading = toast.loading("loading...");
    try {
      removeItems();
      const payload = {
        subjects: data.subjects,
        number: data.number,
      };
      const timeInSeconds = data.time * 60;
      const response = await fetchGroupOfSubjects(payload);
      // @ts-expect-error "fix later"
      saveItem(localstore.questions, response.data);
      // @ts-expect-error "fix later"
      setCookie(userStore.subscribeCount, JSON.stringify(response.updatedUser));
      saveItem(localstore.time, timeInSeconds);
      saveItem(localstore.examStarted, true);
      saveItem(localstore.isJamb, false);
      // @ts-expect-error "fix later"
      dispatch(updateCount(response.updatedUser));

      toast.success("Starting...");
      router.push("/exam");
    } catch (error: any) {
      toast.error(error);
    } finally {
      toast.dismiss(loading);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="min-size-36 flex items-center justify-center rounded-lg bg-primary/50 p-20 text-xl text-white shadow transition-all duration-300 hover:shadow-lg max-sm:w-full">
          Multiple
        </button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-sm:rounded-md">
        <RequireSubscription open={open} setOpen={setOpen} />
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
            <label className="text-right">Subjects</label>
            <div className="col-span-3">
              {/* <SelectSearch setOption={setOption} data={subjects} /> */}
              <Multiselect data={subjects} setOption={setOption} />
              {errors.subjects && (
                <p className="text-sm text-red-500">
                  {errors.subjects.message}
                </p>
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
                max={120}
                {...register("time", { valueAsNumber: true })}
              />
              {errors.time && (
                <p className="text-sm text-red-500">{errors.time.message}</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="mx-auto w-fit"
            disabled={isSubmitting || isFetchingQuestions}
          >
            {isSubmitting || isFetchingQuestions ? (
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
