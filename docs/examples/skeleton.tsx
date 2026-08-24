import { Card, Skeleton } from "antlitz";

export function Loading() {
  return (
    <Card className="flex w-full max-w-xs flex-col gap-3">
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-3" />
      <Skeleton className="h-3 w-4/5" />
    </Card>
  );
}

export function Shapes() {
  return (
    <>
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-24 w-40" />
    </>
  );
}
