import { BigLinkProps } from "./BigLink.props";
import styles from "./BigLink.module.css";
import classNames from "classnames";

export function BigLink({
  className,
  src,
  children,
  ...props
}: BigLinkProps): JSX.Element {
  return (
    <a className={classNames(styles.link, className)} {...props}>
      <div>
        <img src={src} alt="" />
        <span>{children}</span>
      </div>
    </a>
  );
}
