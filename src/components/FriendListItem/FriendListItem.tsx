import clsx from "clsx";
import type { FriendListItemProps } from "../../types/types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }: FriendListItemProps) => {
  return (
    <li className={styles.item}>
      <span
        className={clsx(styles.offline, isOnline && styles.online)}
        aria-label={isOnline ? "Online" : "Offline"}
      />
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
