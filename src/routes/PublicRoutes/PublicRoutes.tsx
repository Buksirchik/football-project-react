import { Route, Switch } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { TableCompetition } from "../../components/TableCompetition/TableCompetition";
import { TournamentList } from "../../components/TournamentList";
import { TeamInfo } from "../../components/TeamInfo";

type RTypes = {
  path: string;
  render: () => React.ReactElement;
  exact?: boolean;
};

const routes: RTypes[] = [
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
  {
    path: "/",
    render: () => <h1>Football app</h1>,
    exact: true,
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
