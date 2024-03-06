import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "bg-primary text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "flex py-2 px-8 rounded-full space-x-2",
        search: "py-2 px-5 rounded-r-md",
        tapInactive: "bg-neutral-50 text-black p-2 rounded-full",
        tapActive: "p-2 rounded-full",
        action: "flex py-2 px-28 rounded-full space-x-3",
        social: "text-black bg-transparent p-2 rounded-full hover:text-white hover:bg-primary",
        ghost: "bg-transparent text-black p-2 rounded-full hover:bg-neutral-50",
        icon: "bg-white hover:bg-neutral-50 border border-neutral-100 text-black p-2 rounded-full",
        iconInactive: "bg-neutral-50 text-neutral-300 p-2 rounded-full"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
