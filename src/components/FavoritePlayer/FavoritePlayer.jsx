import { useDispatch } from "react-redux";
import { deleteFavoritePlayer } from "../../redux/actions";
import "./style.css";

export const FavoritePlayer = ({ clubIcon, name, clubName, position, id }) => {
  const dispatch = useDispatch();
  const unfollowHandler = () => dispatch(deleteFavoritePlayer(id));

  return (
    <li className="favorite-player">
      <div className="player__club-wrap">
        <img className="player__club" src={clubIcon} alt={name} />
      </div>
      <div className="player-info">
        <p className="player-info__text">{name}</p>
        <p className="player-info__text">Club: {clubName}</p>
        <p className="player-info__text">Position: {position}</p>
      </div>
      <button className="unfollow-player" onClick={unfollowHandler}>
        &#10008;
      </button>
    </li>
  );
};
