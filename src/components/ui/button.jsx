import { cn } from "@/lib/utils";

function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50",
        variant === "outline"
          ? "border border-stone-300 bg-white text-stone-950 hover:bg-stone-100"
          : "bg-stone-950 text-white hover:bg-stone-800",
        size === "lg" ? "h-11 px-8" : "h-10 px-4 py-2",
        className
      )}
      {...props}
    />
  );
}

export { Button };