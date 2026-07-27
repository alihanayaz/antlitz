import NextLink, { type LinkProps } from "next/link";
import {
  Hyperlink as BaseHyperlink,
  type HyperlinkProps,
} from "../components/hyperlink.js";

export type NextHyperlinkProps = Omit<HyperlinkProps, "as"> &
  Omit<LinkProps, keyof HyperlinkProps | "as">;

export function Hyperlink(props: NextHyperlinkProps) {
  return <BaseHyperlink {...props} as={NextLink} />;
}
