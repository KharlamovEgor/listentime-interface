import classNames from "classnames";
import { UserDataProps } from "./UserData.props";
import styles from './UserData.module.css'
import DefautlAvatar from './defautl.svg'

export function UserData({className, ...props}: UserDataProps): JSX.Element {
  return <div className={classNames(styles['user-data'], className)} {...props}>
    <img src={DefautlAvatar} alt="" className={styles.avatar} />
    <div>
      <h3 className={styles.name}>Your name</h3>
      <span className={styles.status}>my perfect status</span>
    </div>
    <div className={styles['user-online-status']}></div>
  </div>
}
