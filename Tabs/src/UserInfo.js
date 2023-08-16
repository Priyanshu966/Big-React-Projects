import { FaAngleDoubleRight } from "react-icons/fa";

const UserInfo = ({ data: users, count }) => {
  const { title, company, dates, duties } = users[count];

  return (
    <article className="info">
      <h2>{title}</h2>
      <span className="company">{company}</span>
      <p>{dates}</p>
      <footer>
        <div className="duty-cont">
          <span>
            <FaAngleDoubleRight />
          </span>
          <div className="duty">{duties[0]}</div>
        </div>
        <div className="duty-cont">
          <span>
            <FaAngleDoubleRight />
          </span>
          <div className="duty">{duties[1]}</div>
        </div>
        <div className="duty-cont">
          <span>
            <FaAngleDoubleRight />
          </span>
          <div className="duty">{duties[2]}</div>
        </div>
      </footer>
    </article>
  );
};

export default UserInfo;
