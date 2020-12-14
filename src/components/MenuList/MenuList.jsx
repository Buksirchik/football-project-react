import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTournamentsList } from "../../redux/actions";
import { getListTournamentsSelector } from "../../redux/selectors";
import { MenuListItem } from "../MenuListItem";
import "./style.css";

export const MenuList = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector(getListTournamentsSelector);

  useEffect(() => {
    dispatch(getTournamentsList());
  }, [dispatch]);

  return (
    <ul className="football-list">
      {tournaments.map((item) => (
        <MenuListItem item={item} key={item.id} tournamentId={item.id} />
      ))}
    </ul>
  );
};
