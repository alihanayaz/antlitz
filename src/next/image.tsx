import NextImage, { type ImageProps } from "next/image";
import {
  Image as BaseImage,
  type ImageProps as BaseImageProps,
} from "@/components";
import { isExternalLink } from "@/lib";

export type NextImageProps = Omit<BaseImageProps, "as"> &
  Omit<ImageProps, keyof BaseImageProps | "as">;

export function Image(props: NextImageProps) {
  return (
    <BaseImage
      {...props}
      as={isExternalLink(props.src) ? undefined : NextImage}
    />
  );
}
