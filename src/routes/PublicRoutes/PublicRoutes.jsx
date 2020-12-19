import { Route, Switch } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { TableCompetition } from "../../components/TableCompetition/TableCompetition";
import { TournamentList } from "../../components/TournamentList";
import { TeamInfo } from "../../components/TeamInfo"

const routes = [
  {
    path: "/profile",
    render: () => <Profile />,
  },
  {
    path: "/tournaments",
    render: () => <TournamentList />,
    exact: true,
  },
  {
    path: "/tournaments/:id",
    render: () => <TableCompetition />,
    exact: true,
  },
  {
    path: "/team/:id",
    render: () => <TeamInfo />,
  },
];

export const PublicRoutes = () => {
  return (
    <Switch>
      {routes.map((route, id) => (
        <Route key={id} {...route} />
      ))}
    </Switch>
  );
};
