import { useDispatch } from "react-redux";
import { setTournamentId } from "../../redux/actions";
import "./style.css";

export const MenuListItem = ({ item, tournamentId, toggleMenu }) => {
  const dispatch = useDispatch();

  const btnClickHandler = () => {
    dispatch(setTournamentId(tournamentId));
    toggleMenu();
  };

  return (
    <li className="football-list__row">
      <button className="football-item" onClick={btnClickHandler}>
        <div className="football-item__wrap-img">
          <img
            src={`./images/${item.code}.png`}
            alt={item.name}
            className="football-item__img"
          />
        </div>
        <p className="football-item__name">{item.name}</p>
      </button>
    </li>
  );
};
