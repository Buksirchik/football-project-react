import React, { FC } from 'react';
import './style.css';

type PropTypes = {
  form: string;
};

export const TeamForm: FC<PropTypes> = ({ form }: PropTypes) => {
  const formArr = form.split(',');
  return (
    <ul className='team-form-list'>
      {formArr.map((item, i) => {
        return (
          <li key={i} className={`team-form-list__item ${item}`}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
