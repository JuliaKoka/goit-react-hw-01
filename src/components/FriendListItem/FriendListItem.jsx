import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt={avatar} width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
