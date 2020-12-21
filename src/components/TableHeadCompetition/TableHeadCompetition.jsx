import { useParams } from "react-router-dom";
import "./style.css";

export const TableHeadCompetition = () => {
  const { id: tournamentId } = useParams();

  // if the world championship or european championship, then do not show the form
  const isNotCup =
    +tournamentId !== 2000 && +tournamentId !== 2018 ? true : false;
    console.log(isNotCup, tournamentId)
  return (
    <thead>
      <tr className="standings__head">
        <th className="standings__head-cell">Position</th>
        <th className="standings__head-cell">Club</th>
        <th className="standings__head-cell">Games</th>
        <th className="standings__head-cell">
          <span className="desctop-cell">Points</span>
          <span className="mobile-cell">Pts</span>
        </th>
        <th className="standings__head-cell">
          <span className="desctop-cell">Won</span>
          <span className="mobile-cell">W</span>
        </th>
        <th className="standings__head-cell">
          <span className="desctop-cell">Drawn</span>
          <span className="mobile-cell">D</span>
        </th>
        <th className="standings__head-cell">
          <span className="desctop-cell">Lost</span>
          <span className="mobile-cell">L</span>
        </th>
        <th className="standings__head-cell">
          <abbr title="Golas For">GF</abbr>
        </th>
        <th className="standings__head-cell">
          <abbr title="Goals Against">GA</abbr>
        </th>
        <th className="standings__head-cell">
          <abbr title="Goal Difference">GD</abbr>
        </th>
        {isNotCup ? <th className="standings__head-cell">Form</th> : null}
      </tr>
    </thead>
  );
};
