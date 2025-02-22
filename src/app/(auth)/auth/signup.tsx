"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// import { useAuthContext } from "../hooks/authContext";
import InputLabel from "./input-label";
import { registerUser } from "@/services/auth";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface LoginProps {
  isLogin: boolean;
}

export default function SignupUser({ isLogin }: LoginProps) {
  // const { signup, signupState } = useAuthContext();
  // const { loading, error } = signupState;

  const loginSchema = z
    .object({
      username: z.string().min(1, { message: "Please fill a username" }),
      email: z.string().email({ message: "Enter a valid email" }),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .refine(
          (value) => /[A-Z]/.test(value),
          "Password must contain at least one uppercase letter",
        )
        .refine(
          (value) => /\d/.test(value),
          "Password must contain at least one number",
        )
        .refine(
          (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
          "Password must contain at least one special character",
        ),
      confirmPassword: z
        .string()
        .min(1, { message: "Kindly confirm your password" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password does not match",
      path: ["confirmPassword"],
    });

  type LoginSchemaType = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const signupUser: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      const response = await registerUser(data);
      toast.success(response.message);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <form
      className={`relative flex flex-col items-center overflow-hidden px-4 pt-8 transition-all duration-500 ease-in-out md:justify-center md:pt-0 xl:px-16 ${
        !isLogin ? "delay-500" : "pointer-events-none z-[1] opacity-0 delay-100"
      } `}
      onSubmit={handleSubmit(signupUser)}
    >
      <h2 className="pb-2 font-bold text-slate-700">Sign Up</h2>
      <InputLabel
        type="email"
        id="email"
        placeholder=""
        // error={errors?.email?.message}
        label="Email"
        register={register}
      />
      <InputLabel
        type="text"
        id="username"
        placeholder=""
        // error={errors?.username?.message}
        label="Username"
        register={register}
      />
      <InputLabel
        type="password"
        id="password"
        placeholder=""
        // error={errors?.password?.message}
        label="Password"
        register={register}
      />
      <InputLabel
        type="password"
        id="confirmPassword"
        placeholder=""
        // error={errors?.password?.message}
        label="Confirm Password"
        register={register}
      />

      {errors.email || errors.password || errors.username ? (
        <p className="text-center text-rose-500">
          {errors.email
            ? errors.email.message
            : errors.password
              ? errors.password.message
              : "Kindly Fill all the feilds"}
        </p>
      ) : (
        errors.confirmPassword && (
          <p className="py-2 text-center text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )
      )}
      <div className="flex flex-col items-center justify-center">
        <Button>
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Sign Up"}
        </Button>
      </div>
    </form>
  );
}
