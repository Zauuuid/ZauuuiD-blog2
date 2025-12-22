import React from "react";
import { cn } from "@/lib/cn";

export const Input = React.forwardRef(function Input(
  { className = "", type = "text", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full rounded-md border px-3 py-2 text-sm bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
        className
      )}
      {...props}
    />
  );
});
