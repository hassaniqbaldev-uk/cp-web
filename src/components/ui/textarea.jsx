import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-text-primary h-[3.68rem] w-full resize-none border-b border-[#9C9C9C] px-[1rem] py-[.5rem] text-[1.8rem] leading-[2.6rem] font-normal outline-0 placeholder:text-[#9c9c9c]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
