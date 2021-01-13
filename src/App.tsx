import React from 'react';
import { PublicRoutes } from './routes/PublicRoutes';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { useSelector } from 'react-redux';
import { getThemeSelector } from './redux/selectors';
import './App.css';

function App(): React.ReactElement {
  const theme = useSelector(getThemeSelector);
  return (
    <main className={`main-container ${theme}`}>
      <Navigation />
      <Content>
        <PublicRoutes />
      </Content>
    </main>
  );
}

export default App;
