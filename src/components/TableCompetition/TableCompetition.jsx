import { useContext, useEffect } from "react";
import { AppContext } from "../../store";
import { TableHeadCompetition } from "../TableHeadCompetition/TableHeadCompetition";
import { API } from "../../api";
import "./style.css";
import { TableRowCompetition } from "../TableRowCompetition/TableRowCompetition";

export const TableCompetition = () => {
  const {
    state: { competitionInfo, competitionID },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    API.getCompetitionStandings(competitionID).then(({ data }) => {
      dispatch({ type: "setCompetitionInfo", payload: data });
    });
  }, [competitionID]);

  if (!competitionInfo) return "Loading...";
  const { competition, standings } = competitionInfo;

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
