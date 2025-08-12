import React from "react";

export const getFlexDirection: any = {
  vertical: "flex-col",
  horizontal_reverse: "flex-row-reverse",
  vertical_reverse: "flex-col-reverse",
};

type ClassValue = string | number | boolean | undefined | null;

export function cn(...args: ClassValue[]): string {
  return args
    .filter((arg) => arg !== false && arg !== null && arg !== undefined)
    .map((arg) => (typeof arg === 'string' ? arg : ''))
    .join(' ');
}

export const MdIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    role="button"
    ref={ref}
    className={`min-w-4 min-h-4 flex items-center justify-center ${className}`}
    {...props}
  />
));
MdIcon.displayName = "MdIcon";
