import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamInfo } from "../../redux/actions";
import {
  getCurrentTeamIdSelector,
  getTeamInfoSelector,
} from "../../redux/selectors";
import { PlayerCard } from "../PlayerCard";
import flag from "./images/flag.gif";
import "./style.css";

const defaultPlayer = {
  dateOfBirth: "1985-02-05T00:00:00Z",
  name: "John Snow",
  nationality: "Westeros",
  position: "Attacker",
  role: "PLAYER",
};

export const TeamInfo = () => {
  const dispatch = useDispatch();
  const teamInfo = useSelector(getTeamInfoSelector);
  const currentTeamId = useSelector(getCurrentTeamIdSelector);

  useEffect(() => {
    if (currentTeamId === null) return;
    dispatch(getTeamInfo(currentTeamId));
  }, [dispatch, currentTeamId]);

  if (teamInfo === null) return null;

  const {
    name,
    crestUrl,
    founded = "1960",
    venue: stadium = "National stadium",
  } = teamInfo;

  let { squad } = teamInfo;

  if (!squad.length) {
    squad = Array(10).fill(defaultPlayer);
  }

  return (
    <section className="club">
      <h2 className="club__title">{name}</h2>
      <img className="club__img" src={crestUrl || flag} alt={name} />
      <p className="club__info">Founded: {founded}</p>
      <p className="club__info">Stadium: {stadium}</p>
      <h3 className="club__info">Team:</h3>
      <div className="club-team">
        {squad.map((player) => (
          <PlayerCard {...player} />
        ))}
      </div>
    </section>
  );
};
