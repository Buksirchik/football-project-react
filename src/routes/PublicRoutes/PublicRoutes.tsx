import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile } from '../../components/Profile';
import { TableCompetition } from '../../components/TableCompetition/TableCompetition';
import { TournamentList } from '../../components/TournamentList';
import { TeamInfo } from '../../components/TeamInfo';

type RTypes = {
  path: string;
  component: React.ReactElement;
  exact?: boolean;
};

const routes: RTypes[] = [
  {
    path: '/profile',
    component: <Profile />,
  },
  {
    path: '/tournaments',
    component: <TournamentList />,
    exact: true,
  },
  {
    path: '/tournaments/:id',
    component: <TableCompetition />,
    exact: true,
  },
  {
    path: '/team/:id',
    component: <TeamInfo />,
  },
  {
    path: '/',
    component: <h1>Football app</h1>,
    exact: true,
  },
];

export const PublicRoutes = (): React.ReactElement => {
  return (
    <Switch>
      {routes.map(({ component, ...props }, id) => (
        <Route key={id} render={() => component} {...props} />
      ))}
    </Switch>
  );
};
