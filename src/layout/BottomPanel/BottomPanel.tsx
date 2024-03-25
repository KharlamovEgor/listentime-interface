import classNames from "classnames";
import styles from "./BottomPanel.module.css";
import { BottomPanelProps } from "./BottomPanel.props";
import LogoSrc from "../../assets/logo.svg";
import BurgerSrc from "../../assets/burger.svg";

export function BottomPanel({
  className,
  ...props
}: BottomPanelProps): JSX.Element {
  return (
    <aside className={classNames(styles["bottom-panel"], className)} {...props}>
      <img src={LogoSrc} alt="" width="42" />
      <img src={BurgerSrc} alt="" width="36" height="30" />
    </aside>
  );
}
