import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.img} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{tag.slice(1, tag.length)}</p>
        <p className={css.text}>{location}</p>
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
