import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTournamentsList } from "../../redux/actions";
import { getListTournamentsSelector } from "../../redux/selectors";
import "./style.css";

export const TournamentList = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector(getListTournamentsSelector);

  useEffect(() => {
    dispatch(getTournamentsList());
  }, [dispatch]);

  return (
    <ul>
      {tournaments.map((item) => (
        <Link key={item.id} to={`/tournaments/${item.id}`} className="tournament">
          <div className="tournament-img__wrap">
            <img
              src={`./images/${item.code}.png`}
              alt={item.name}
              className="tournament__img"
            />
          </div>
          <p className="tournament__name">{item.name}</p>
        </Link>
      ))}
    </ul>
  );
};
