const User = ({ avatar_url, html_url, login }) => {
  return (
    <article className="user">
      <img src={avatar_url} alt={login}></img>
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};
export default User;
