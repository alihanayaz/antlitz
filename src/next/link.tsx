import NextLink, { type LinkProps } from "next/link";
import {
  Link as BaseLink,
  type LinkProps as BaseLinkProps,
} from "@/components";

export type NextLinkProps = Omit<BaseLinkProps, "as"> &
  Omit<LinkProps, keyof BaseLinkProps | "as">;

export function Link(props: NextLinkProps) {
  return <BaseLink {...props} as={NextLink} />;
}
