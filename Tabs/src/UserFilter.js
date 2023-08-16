const UserFilter = ({ data: users, showUser, count }) => {
  return (
    <div class="btn-cont">
      {users.map((user, index) => {
        const { order, company } = user;
        return (
          <button
            className={`user-btn ${count === index && "active"}`}
            onClick={() => showUser(index)}
            key={order}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default UserFilter;
