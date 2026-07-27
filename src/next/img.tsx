import NextImage, { type ImageProps } from "next/image";
import { Img as BaseImg, type ImgProps } from "../components/img.js";
import { isExternalLink } from "../lib/url.js";

export type NextImgProps = Omit<ImgProps, "as"> &
  Omit<ImageProps, keyof ImgProps | "as">;

export function Img(props: NextImgProps) {
  return (
    <BaseImg
      {...props}
      as={isExternalLink(props.src) ? undefined : NextImage}
    />
  );
}
