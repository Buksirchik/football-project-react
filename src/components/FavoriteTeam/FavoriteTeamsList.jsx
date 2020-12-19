import { useDispatch } from "react-redux";
import { deleteFavoriteTeam } from "../../redux/actions";
import "./style.css";

export const FavoriteTeamsList = ({ teams }) => {
  const dispatch = useDispatch();

  return (
    <ul className="favorite-teams">
      {teams.map((team) => {
        const unfollowHandler = () => dispatch(deleteFavoriteTeam(id));
        const { crestUrl, name, id } = team;
        return (
          <li className="favorite-team" key={id}>
            <div className="favorite-team__img-wrap">
              <img className="favorite-team__img" src={crestUrl} alt={name} />
            </div>
            <p className="favorite-team__name">{name}</p>
            <button className="unfollow-team" onClick={unfollowHandler}>
              &#10008;
            </button>
          </li>
        );
      })}
    </ul>
  );
};
