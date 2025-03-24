/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { userStore } from "@/data/constants";
import { updateCount } from "@/hooks/features/authSlice";
import { setCookie } from "@/lib/auth";
import { useConfirmSub } from "@/services/subscription";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const SubscribeUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mutateAsync: confirm } = useConfirmSub();

  const subscribe = async () => {
    try {
      const response = await confirm();
      setCookie(
        userStore.subscribeCount,
        JSON.stringify(response.subscribeCount),
      );
      dispatch(updateCount(response.subscribeCount));
      router.replace("/dashboard");
    } catch (error: any) {
      toast.error("Something went wrong");
      router.replace("/");
    }
  };

  useEffect(() => {
    subscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default SubscribeUser;
