import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Content } from "./components/Content";
import { Navigation } from "./components/Navigation/";
import { TableCompetition } from "./components/TableCompetition";
import { TeamInfo } from "./components/TeamInfo/TeamInfo";
import { persistor, store } from "./redux";
import { Profile } from "./components/Profile";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
        <Content>
          <TableCompetition />
          <TeamInfo />
          <Profile />
        </Content>
      </PersistGate>
    </Provider>
  );
}

export default App;
