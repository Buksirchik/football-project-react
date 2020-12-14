import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlayer } from "../../redux/actions";
import { getFavoritePlayersSelector } from "../../redux/selectors";
import "./style.css";

export const PlayerCard = (props) => {
  const dispatch = useDispatch();
  const favoritePlayers = useSelector(getFavoritePlayersSelector);
  const { name, dateOfBirth, position, nationality, role, id } = props;

  const isFa
  const btnClickHandler = () => {
    dispatch(addFavoritePlayer(id));
  };
  return (
    <div className="card" key={id}>
      <div className="card__front">
        <p>{name || "John"}</p>
      </div>
      <div className="card__back">
        <p>Nationality: {nationality || "Westeros"}</p>
        <p>
          Date of Birth:{" "}
          {new Date(dateOfBirth).toLocaleDateString() || "04/06/1990"}
        </p>
        <p>Position: {position || "Team Member"}</p>
        <p>Role: {role || "Team Member"}</p>

        <button onClick={btnClickHandler}>FOLLOW</button>
      </div>
    </div>
  );
};
