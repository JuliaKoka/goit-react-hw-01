import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";

import css from "./App.module.css";

import userData from "../../userData.json";
import friends from "../../friends.json";

export default function App() {
  return (
    <div className={css.container}>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </div>
  );
}
