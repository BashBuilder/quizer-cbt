"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Lock, Unlock } from "lucide-react";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

const InputLabel = ({
  id,
  type,
  placeholder,
  label,
  error,
  register,
  onChange,
  value,
}: {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  error?: string | undefined;
  register?: UseFormRegister<any>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="mb-4">
      <div className="relative">
        <input
          className={`peer mt-2 w-full border-b-[.015rem] border-b-primary bg-transparent pb-2 pl-2 pr-6 text-zinc-800 outline-none placeholder:text-transparent ${
            error
              ? "placeholder-shown:border-b-red-500 focus:border-b-red-500"
              : "placeholder-shown:border-b-slate-600 focus:border-b-primary"
          } `}
          type={type === "password" && !isPasswordShown ? "password" : "text"}
          id={id}
          placeholder={placeholder}
          {...register?.(id)}
          onChange={onChange}
          value={value}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-1 top-1/2 -translate-y-1/2 text-primary peer-placeholder-shown:text-slate-400 peer-focus:text-primary"
            onClick={() => setIsPasswordShown((prev) => !prev)}
          >
            {isPasswordShown ? <Unlock size={14} /> : <Lock size={16} />}
          </button>
        )}
        <label
          htmlFor={id}
          className={`absolute -top-2 left-0 text-xs text-primary transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary`}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputLabel;
