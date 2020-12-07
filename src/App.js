import { useReducer } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { MenuList } from "./components/MenuList";
import { Navigation } from "./components/Navigation/";
import { TableCompetition } from "./components/TableCompetition";
import { TeamInfo } from "./components/TeamInfo/TeamInfo";
import { AppContext, reducer, initState } from "./store";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      <Navigation>
        <MenuList />
      </Navigation>
      <Content>
        <TableCompetition />
        <TeamInfo />
      </Content>
    </AppContext.Provider>
  );
}

export default App;
