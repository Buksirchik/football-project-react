import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavoriteTeam, deleteFavoriteTeam, getTeamInfo } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { FavoriteItem, FetchingStatus, TeamInfo as TeamInfoTypes } from '../../types';
import { getFavoriteTeamsSelector, getFetchingStatus, getTeamInfoSelector } from '../../redux/selectors';
import { FollowBtn } from '../FollowBtn';
import { PlayerCard } from '../PlayerCard';
import { Preloader } from '../Preloader';
import { UnfollowBtn } from '../UnfollowBtn';
import flag from './images/flag.gif';
import './style.css';

const defaultPlayer = {
  dateOfBirth: '1985-02-05T00:00:00Z',
  name: 'John Snow',
  nationality: 'Westeros',
  position: 'Attacker',
  role: 'PLAYER',
};

type ParamTypes = {
  id: string;
};

export const TeamInfo = (): React.ReactElement => {
  const dispatch = useDispatch();
  const favoriteTeams = useSelector<RootState, FavoriteItem>(getFavoriteTeamsSelector);
  const teamInfo = useSelector<RootState, TeamInfoTypes | null>(getTeamInfoSelector);
  const isFetching = useSelector<RootState, FetchingStatus>(getFetchingStatus);
  const { id: teamId } = useParams<ParamTypes>();
  const isFavorite = !!favoriteTeams[teamId];

  useEffect(() => {
    dispatch(getTeamInfo(+teamId));
    window.scrollTo(0, 0);
  }, [dispatch, teamId]);

  if (isFetching || teamInfo === null) return <Preloader />;

  const { id, name, crestUrl, founded = '1960', venue: stadium } = teamInfo;

  let { squad } = teamInfo;

  if (!squad.length) {
    squad = Array(10).fill(defaultPlayer);
  }

  const followClickHandler = () => {
    const team = {
      id,
      name,
      crestUrl,
    };
    dispatch(addFavoriteTeam(team));
  };

  const unfollowClickHandler = () => {
    dispatch(deleteFavoriteTeam(id));
  };

  return (
    <section className='club'>
      <div className='club-info'>
        <div className='club-info__img-wrap'>
          <img className='club-info__img' src={crestUrl || flag} alt={name} />
        </div>
        <div className='club-info__col'>
          <h2 className='club-info__title'>{name}</h2>
          <p className='club-info__text'>Founded: {founded}</p>
          <p className='club-info__text'>Stadium: {stadium || 'National stadium'}</p>
          {isFavorite ? <UnfollowBtn onClick={unfollowClickHandler} /> : <FollowBtn onClick={followClickHandler} />}
        </div>
      </div>
      <div className='team'>
        <h3 className='team__title'>Team:</h3>
        <div className='team-block'>
          {squad.map(player => (
            <PlayerCard {...player} key={player.id} clubName={name} clubIcon={crestUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};
