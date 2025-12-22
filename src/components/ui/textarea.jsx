import React from "react";
import { cn } from "@/lib/cn";

export const Textarea = React.forwardRef(function Textarea(
  { className = "", ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-md border px-3 py-2 text-sm bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
        className
      )}
      {...props}
    />
  );
});
