import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friends={friend} />
          </li>
        );
      })}
    </ul>
  );
}
