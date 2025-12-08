"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({ className, ...props }) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-text-primary text-[3rem] font-semibold tracking-[-0.02em] md:text-[4.8rem]",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
