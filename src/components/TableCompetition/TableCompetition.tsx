import React, { useEffect } from 'react';
import { TableHeadCompetition } from '../TableHeadCompetition';
import { TableRowCompetition } from '../TableRowCompetition';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchingStatus, getTournamentInfoSelector } from '../../redux/selectors';
import { getTournamentStandings } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import './style.css';
import { Preloader } from '../Preloader';
import { FetchingStatus, Standings, TournamentInfo } from '../../types';
import { RootState } from '../../redux/reducers';

type ParamTypes = {
  id: string;
};

export const TableCompetition = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { id: tournamentId } = useParams<ParamTypes>();
  const tournamentInfo = useSelector<RootState, TournamentInfo | null>(getTournamentInfoSelector);
  const isFetching = useSelector<RootState, FetchingStatus>(getFetchingStatus);

  useEffect(() => {
    dispatch(getTournamentStandings(+tournamentId));
    window.scrollTo(0, 0);
  }, [tournamentId, dispatch]);

  if (isFetching || tournamentInfo === null) return <Preloader />;

  const { competition, standings } = tournamentInfo;

  return (
    <>
      <h2 className='tournament__title'>{competition.name}</h2>
      {showTable(standings)}
    </>
  );
};

function showTable(standings: Standings[]) {
  return standings.map(({ table, group }, id) => {
    const title = group?.replace('_', ' ');
    return (
      <div key={id}>
        <h3 className='tournament__title'>{title || 'Standings'}</h3>
        <table className='standings'>
          <TableHeadCompetition />
          <tbody>
            <TableRowCompetition table={table} />
          </tbody>
        </table>
      </div>
    );
  });
}
