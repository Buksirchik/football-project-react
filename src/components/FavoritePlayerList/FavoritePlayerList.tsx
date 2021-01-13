import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFavoritePlayer } from '../../redux/actions';
import flag from './images/flag.gif';
import { Favorite } from '../../types';
import './style.css';

type PropTypes = {
  players: Favorite[];
};

export const FavoritePlayersList = ({ players }: PropTypes): React.ReactElement => {
  const dispatch = useDispatch();

  return (
    <ul className='favorite-players'>
      {players.map(player => {
        const { clubIcon, name, clubName, position, id } = player;
        const unfollowHandler = () => dispatch(deleteFavoritePlayer(id));

        return (
          <li className='favorite-player' key={id}>
            <div className='player__club-wrap'>
              <img className='player__club' src={clubIcon || flag} alt={name} />
            </div>
            <div className='player-info'>
              <p className='player-info__text'>{name}</p>
              <p className='player-info__text'>Club: {clubName}</p>
              <p className='player-info__text'>Position: {position}</p>
            </div>
            <button className='unfollow-player' onClick={unfollowHandler}>
              &#10008;
            </button>
          </li>
        );
      })}
    </ul>
  );
};
