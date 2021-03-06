import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritePlayer, deleteFavoritePlayer } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { FavoriteItem } from '../../types';
import { getFavoritePlayersSelector } from '../../redux/selectors';
import { FollowBtn } from '../FollowBtn';
import { UnfollowBtn } from '../UnfollowBtn';
import './style.css';

type PropTypes = {
  name: string;
  dateOfBirth: string;
  position: string;
  nationality: string;
  role: string;
  id: number;
  clubName: string;
  clubIcon: string;
};

export const PlayerCard = (props: PropTypes): React.ReactElement => {
  const dispatch = useDispatch();
  const favoritePlayers = useSelector<RootState, FavoriteItem>(getFavoritePlayersSelector);
  const { name, dateOfBirth, position, nationality, role, id, clubName, clubIcon } = props;

  const isFavoritePlayer = !!favoritePlayers[id];

  const followClickHandler = () => {
    const player = {
      id,
      name,
      position,
      clubName,
      clubIcon,
    };
    dispatch(addFavoritePlayer(player));
  };

  const unfollowClickHandler = () => {
    dispatch(deleteFavoritePlayer(id));
  };

  return (
    <div className='card'>
      <div className='card__front'>
        <p className='card__text'>{name || 'John'}</p>
      </div>
      <div className='card__back'>
        <p className='card__text'>Nationality: {nationality || 'Westeros'}</p>
        <p className='card__text'>
          Date of Birth:
          {' ' + new Date(dateOfBirth).toLocaleDateString() || '04/06/1990'}
        </p>
        <p className='card__text'>Position: {position || 'Team Member'}</p>
        <p className='card__text'>Role: {role || 'Team Member'}</p>
        {isFavoritePlayer ? <UnfollowBtn onClick={unfollowClickHandler} /> : <FollowBtn onClick={followClickHandler} />}
      </div>
    </div>
  );
};
