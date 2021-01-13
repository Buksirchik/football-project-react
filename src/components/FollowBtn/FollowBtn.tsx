import React from 'react';
import './style.css';

type PropTypes = {
  onClick: () => void;
};

export const FollowBtn = ({ onClick }: PropTypes): React.ReactElement => {
  return (
    <button className='follow' onClick={onClick}>
      FOLLOW
    </button>
  );
};
