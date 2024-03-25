import classNames from 'classnames'
import styles from './LeftPanel.module.css'
import { LeftPanelProps } from './LeftPanel.props'

export function LeftPanel({className, children,...props}: LeftPanelProps): JSX.Element {
  return <aside className={classNames(styles['left-panel'], className)} {...props}>
    {children}
  </aside>
}
