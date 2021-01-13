import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTournamentsList } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Tournament } from '../../types';
import { getListTournamentsSelector } from '../../redux/selectors';
import { Preloader } from '../Preloader';
import './style.css';

export const TournamentList = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tournaments = useSelector<RootState, Tournament[]>(getListTournamentsSelector);

  useEffect(() => {
    dispatch(getTournamentsList());
    window.scrollTo(0, 0);
  }, [dispatch]);

  if (!tournaments.length) return <Preloader />;
  return (
    <>
      <h1 className='tournament__title'>Select a tournament</h1>
      <ul className='tournament-list'>
        {tournaments.map(item => (
          <Link key={item.id} to={`/tournaments/${item.id}`} className='tournament'>
            <div className='tournament-img__wrap'>
              <img src={`./images/${item.code}.png`} alt={item.name} className='tournament__img' />
            </div>
            <p className='tournament__name'>{item.name}</p>
          </Link>
        ))}
      </ul>
    </>
  );
};
