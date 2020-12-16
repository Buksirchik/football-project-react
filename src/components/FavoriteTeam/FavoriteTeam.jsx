import { useDispatch } from "react-redux";
import { deleteFavoriteTeam } from "../../redux/actions";
import "./style.css";

export const FavoriteTeam = ({ crestUrl, name, id }) => {
  const dispatch = useDispatch();
  const unfollowHandler = () => dispatch(deleteFavoriteTeam(id));

  return (
    <li className="favorite-team">
      <div className="favorite-team__img-wrap">
        <img className="favorite-team__img" src={crestUrl} alt={name} />
      </div>
      <p className="favorite-team__name">{name}</p>
      <button className="unfollow-team" onClick={unfollowHandler}>
        &#10008;
      </button>
    </li>
  );
};
