import { Link } from "react-router-dom";
const User = ({ imgUrl, name, email, id }) => {
  return (
    <Link to={`/profile/${id}`} className="user">
      <img src={imgUrl} referrerPolicy="no-referrer" alt="" />
      <div className="text">
        <div className="name">{name}</div>
        <div className="email">{email}</div>
      </div>
    </Link>
  );
};

export default User;
