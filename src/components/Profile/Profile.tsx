import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { FavoriteItem } from '../../types';
import { getFavoritePlayersSelector, getFavoriteTeamsSelector } from '../../redux/selectors';
import { FavoritePlayersList } from '../FavoritePlayerList';
import { FavoriteTeamsList } from '../FavoriteTeamList';
import avatar from './images/avatar.jpg';
import './style.css';

export const Profile = (): React.ReactElement => {
  const favoritePlayers = useSelector<RootState, FavoriteItem>(getFavoritePlayersSelector);
  const favoriteTeams = useSelector<RootState, FavoriteItem>(getFavoriteTeamsSelector);
  const isEmptyPlayers = !!Object.values(favoritePlayers).length;
  const isEmptyTeams = !!Object.values(favoriteTeams).length;

  return (
    <div className='profile'>
      <div className='profile-header'>
        <div className='profile-avatar'>
          <img className='profile-avatar__img' src={avatar} alt='John Snow' />
        </div>
      </div>
      <p className='profile__name'>John Snow</p>

      {isEmptyTeams ? (
        <div className='following-teams'>
          <h3 className='following__title'>Following teams</h3>
          <FavoriteTeamsList teams={Object.values(favoriteTeams)} />
        </div>
      ) : null}

      {isEmptyPlayers ? (
        <div className='following-players'>
          <h3 className='following__title'>Following players</h3>
          <FavoritePlayersList players={Object.values(favoritePlayers)} />
        </div>
      ) : null}

      {(isEmptyPlayers || isEmptyTeams) === true ? null : <p className='profile__text'>There aren&apos;t favorite players and teams</p>}
    </div>
  );
};
