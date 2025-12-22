import React from "react";
import { cn } from "@/lib/cn";

export const Button = React.forwardRef(function Button(
  { className = "", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
});
