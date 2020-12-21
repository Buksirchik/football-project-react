import { useEffect } from "react";
import { TableHeadCompetition } from "../TableHeadCompetition/TableHeadCompetition";
import { TableRowCompetition } from "../TableRowCompetition/TableRowCompetition";
import { useDispatch, useSelector } from "react-redux";
import { getTournamentInfoSelector } from "../../redux/selectors";
import { getTournamentStandings } from "../../redux/actions";
import { useParams } from "react-router-dom";
import "./style.css";
import { Preloader } from "../Preloader";

export const TableCompetition = () => {
  const dispatch = useDispatch();
  const { id: tournamentId } = useParams();
  const tournamentInfo = useSelector(getTournamentInfoSelector);

  useEffect(() => {
    dispatch(getTournamentStandings(tournamentId));
    window.scrollTo(0, 0);
  }, [tournamentId, dispatch]);

  if (tournamentInfo === null) return <Preloader />;

  const { competition, standings } = tournamentInfo;

  return (
    <>
      <h2 className="tournament__title">{competition.name}</h2>
      {showTable(standings)}
    </>
  );
};

function showTable(standings) {
  return standings.map(({ table, group }, id) => {
    const title = group?.replace("_", " ");
    return (
      <div key={id}>
        <h3 className="tournament__title">{title || "Standings"}</h3>
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
