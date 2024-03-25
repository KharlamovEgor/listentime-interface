import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface BigLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  src: string;
  children: string;
}
