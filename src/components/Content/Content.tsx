import React from 'react';
import './style.css';

type PropTypes = {
  children: React.ReactElement;
};

export const Content = ({ children }: PropTypes): React.ReactElement => {
  return <div className='main-content'>{children}</div>;
};
