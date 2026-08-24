import type { MDXComponents } from "mdx/types";
import { Preview } from "@/components/preview";
import { PropsTable } from "@/components/props-table";
import { TokenTable } from "@/components/token-table";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { Preview, PropsTable, TokenTable, ...components };
}
