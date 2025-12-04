"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "toggle-switch inline-flex h-[4rem] w-[6rem] items-center transition-all md:h-[6.7rem] md:w-[11.4rem]",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-[3rem] rounded-full bg-[#FFE500] transition-transform data-[state=checked]:translate-x-[calc(100%-4px)] data-[state=unchecked]:translate-x-[4px] md:size-[5.6rem]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
