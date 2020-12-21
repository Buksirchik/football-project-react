import { PublicRoutes } from "./routes/PublicRoutes";
import { Navigation } from "./components/Navigation";
import { Content } from "./components/Content";
import "./App.css";
import { useSelector } from "react-redux";
import { getThemeSelector } from "./redux/selectors";

function App() {
  const theme = useSelector(getThemeSelector);
  return (
    <main className={`main-container ${theme}`}>
      <Navigation />
      <Content>
        <PublicRoutes />
      </Content>
      <div></div>
    </main>
  );
}

export default App;
