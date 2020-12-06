import { useContext, useEffect } from "react";
import { API } from "../../api";
import { AppContext } from "../../store";
import { PlayerCard } from "../PlayerCard";
import "./style.css";

export const TeamInfo = () => {
  const {
    state: { currentTeamID, teamInfo },
    dispatch,
  } = useContext(AppContext);
  useEffect(() => {
    if (currentTeamID === null) return;
    API.getTeam(currentTeamID).then(({ data }) => {
      dispatch({ type: "setTeamInfo", payload: data });
    });
  }, [currentTeamID]);

  if (teamInfo === null) return null;

  const { name, crestUrl, founded = "1960", venue: stadium, squad } = teamInfo;
  return (
    <section className="club">
      <h2 className="club__title">{name}</h2>
      <img className="club__img" src={crestUrl} alt="name" />
      <p className="club__info">Founded: {founded}</p>
      <p className="club__info">Stadium: {stadium}</p>
      <h3 className="club__info">Team:</h3>
      <div className="club-team">
        {squad.map((player) => (
          <PlayerCard {...player} key={player.id} />
        ))}
      </div>
    </section>
  );
};
