import { Image } from "antlitz";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100'%3E%3Crect width='160' height='100' fill='%23bbb'/%3E%3C/svg%3E";

export function Basic() {
  return <Image src={PLACEHOLDER} alt="A placeholder" className="w-40" />;
}

export function Fallback() {
  return (
    <div className="flex items-start gap-4">
      <Image
        src="/does-not-exist.jpg"
        fallback={PLACEHOLDER}
        alt="A broken source"
        className="w-40"
      />
      <Image
        src=""
        fallback={PLACEHOLDER}
        alt="An empty source"
        className="w-40"
      />
    </div>
  );
}
