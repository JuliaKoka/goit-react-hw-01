import css from "./Profile.module.css";

export default function Profile({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag.slice(1, tag.length)}</p>
        <p>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.liStyle}>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li className={css.liStyle}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.liStyle}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
