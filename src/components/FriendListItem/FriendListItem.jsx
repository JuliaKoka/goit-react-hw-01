import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  let variant;

  if (isOnline) {
    variant = <p className={css.isOnline}>Online</p>;
  } else {
    variant = <p className={css.isOffline}>Offline</p>;
  }
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt={avatar} width="48" />
      <p className={css.text}>{name}</p>
      {variant}
    </div>
  );
}
