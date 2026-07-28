import { cn } from "@/lib";
import { Icon, type IconProps } from "./icon";

export type SpinnerProps = IconProps;

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <Icon
      variant="stroke"
      role="status"
      aria-label="Loading"
      className={cn("motion-safe:animate-spin", className)}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Icon>
  );
}
