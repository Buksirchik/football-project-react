import { useEffect } from "react";
import { TableHeadCompetition } from "../TableHeadCompetition/TableHeadCompetition";
import { TableRowCompetition } from "../TableRowCompetition/TableRowCompetition";
import { useDispatch, useSelector } from "react-redux";
import {
  getTournamentIdSelector,
  getTournamentInfoSelector,
} from "../../redux/selectors";
import { getTournamentStandings } from "../../redux/actions";
import "./style.css";

export const TableCompetition = () => {
  const dispatch = useDispatch();
  const tournamentId = useSelector(getTournamentIdSelector);
  const tournamentInfo = useSelector(getTournamentInfoSelector);

  useEffect(() => {
    dispatch(getTournamentStandings(tournamentId));
  }, [tournamentId, dispatch]);

  if (!tournamentInfo) return "Loading...";
  const { competition, standings } = tournamentInfo;

  return (
    <>
      <h2>{competition.name}</h2>
      {showTable(standings)}
    </>
  );
};

function showTable(standings) {
  return standings.map(({ table, group }, id) => {
    const title = group?.replace("_", " ");
    return (
      <div key={id}>
        <h3>{title || "Standings"}</h3>
        <table className="standings">
          <TableHeadCompetition />
          <tbody>
            <TableRowCompetition table={table} />
          </tbody>
        </table>
      </div>
    );
  });
}
