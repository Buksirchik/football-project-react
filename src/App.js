import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux";
import { HashRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Navigation } from "./components/Navigation";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <Navigation />
          <Content>
            <PublicRoutes />
          </Content>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
