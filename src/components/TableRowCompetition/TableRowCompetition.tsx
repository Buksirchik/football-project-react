import { FC } from "react";
import { Link } from "react-router-dom";
import { TeamStatistics } from "../../redux/reducers/tournamentReducer";
import { TeamForm } from "../TeamForm/TeamForm";
import flagTeam from "./images/flag.gif";
import "./style.css";

type PropTypes = {
  table: TeamStatistics[];
};

export const TableRowCompetition: FC<PropTypes> = ({ table }) => {
  const tableRows = table.map((item) => {
    const {
      position,
      form,
      draw,
      lost,
      playedGames,
      points,
      goalDifference,
      goalsAgainst,
      goalsFor,
      team,
      won,
    } = item;

    return (
      <tr key={team.id}>
        <td className="standings__cell">{position}</td>
        <td className="standings__cell">
          <Link className="football-team" to={`/team/${team.id}`}>
            <img
              src={team.crestUrl || flagTeam}
              alt={team.name}
              className="football-team__logo"
            />
            <p className="football-team__name">{team.name}</p>
          </Link>
        </td>
        <td className="standings__cell">{playedGames}</td>
        <td className="standings__cell">{points}</td>
        <td className="standings__cell">{won}</td>
        <td className="standings__cell">{draw}</td>
        <td className="standings__cell">{lost}</td>
        <td className="standings__cell">{goalsFor}</td>
        <td className="standings__cell">{goalsAgainst}</td>
        <td className="standings__cell">{goalDifference}</td>
        {form ? (
          <td className="standings__cell">
            <TeamForm form={form} />
          </td>
        ) : null}
      </tr>
    );
  });

  return <>{tableRows}</>
};
