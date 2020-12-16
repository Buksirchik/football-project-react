import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlayer, deleteFavoritePlayer } from "../../redux/actions";
import { getFavoritePlayersSelector } from "../../redux/selectors";
import { FollowBtn } from "../FollowBtn";
import { UnfollowBtn } from "../UnfollowBtn";
import "./style.css";

export const PlayerCard = (props) => {
  const dispatch = useDispatch();
  const favoritePlayers = useSelector(getFavoritePlayersSelector);
  const {
    name,
    dateOfBirth,
    position,
    nationality,
    role,
    id,
    clubName,
    clubIcon,
  } = props;

  const isFavoritePlayer = !!favoritePlayers[id];

  const followClickHandler = () => {
    const player = {
      id,
      name,
      position,
      clubName,
      clubIcon,
    };
    dispatch(addFavoritePlayer(player));
  };

  const unfollowClickHandler = () => {
    dispatch(deleteFavoritePlayer(id));
  };

  return (
    <div className="card">
      <div className="card__front">
        <p>{name || "John"}</p>
      </div>
      <div className="card__back">
        <p>Nationality: {nationality || "Westeros"}</p>
        <p>
          Date of Birth:
          {" " + new Date(dateOfBirth).toLocaleDateString() || "04/06/1990"}
        </p>
        <p>Position: {position || "Team Member"}</p>
        <p>Role: {role || "Team Member"}</p>
        {isFavoritePlayer ? (
          <UnfollowBtn onClick={unfollowClickHandler} />
        ) : (
          <FollowBtn onClick={followClickHandler} />
        )}
      </div>
    </div>
  );
};
