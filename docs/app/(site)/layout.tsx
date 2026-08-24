import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-5xl gap-12 px-6 py-12">
      <SiteNav />
      <main className="typeset min-w-0 flex-1">{children}</main>
    </div>
  );
}
