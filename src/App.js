import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { Content } from "./components/Content";
import { MenuList } from "./components/MenuList";
import { Navigation } from "./components/Navigation/";
import { TableCompetition } from "./components/TableCompetition";
import { TeamInfo } from "./components/TeamInfo/TeamInfo";
import { persistor, store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation>
          <MenuList />
        </Navigation>
        <Content>
          <TableCompetition />
          <TeamInfo />
        </Content>
      </PersistGate>
    </Provider>
  );
}

export default App;
