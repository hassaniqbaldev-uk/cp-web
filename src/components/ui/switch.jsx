"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "toggle-switch inline-flex h-[6.7rem] w-[11.4rem] items-center transition-all",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-[5.6rem] rounded-full bg-[#FFE500] transition-transform data-[state=checked]:translate-x-[calc(100%-4px)] data-[state=unchecked]:translate-x-[4px]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
