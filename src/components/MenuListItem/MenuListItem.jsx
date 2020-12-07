import { useContext } from "react";
import { AppContext } from "../../store";
import "./style.css";

export const MenuListItem = ({ item, competitionID }) => {
  const { dispatch } = useContext(AppContext);

  const btnClickHandler = () => {
    dispatch({ type: "setCompetition", payload: competitionID });
    dispatch({ type: "deleteTeamInfo" });
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
