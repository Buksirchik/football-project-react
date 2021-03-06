import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFavoriteTeam } from '../../redux/actions';
import flag from './images/flag.gif';
import { Favorite } from '../../types';
import './style.css';

type PropTypes = {
  teams: Favorite[];
};

export const FavoriteTeamsList = ({ teams }: PropTypes): React.ReactElement => {
  const dispatch = useDispatch();

  return (
    <ul className='favorite-teams'>
      {teams.map(team => {
        const unfollowHandler = () => dispatch(deleteFavoriteTeam(id));
        const { crestUrl, name, id } = team;
        return (
          <li className='favorite-team' key={id}>
            <div className='favorite-team__img-wrap'>
              <img className='favorite-team__img' src={crestUrl || flag} alt={name} />
            </div>
            <p className='favorite-team__name'>{name}</p>
            <button className='unfollow-team' onClick={unfollowHandler}>
              &#10008;
            </button>
          </li>
        );
      })}
    </ul>
  );
};
