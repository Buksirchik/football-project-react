import React from 'react';
import './style.css';

type PropTypes = {
  onClick: () => void;
};

export const UnfollowBtn = ({ onClick }: PropTypes): React.ReactElement => {
  return (
    <button className='unfollow' onClick={onClick}>
      UNFOLLOW
    </button>
  );
};
