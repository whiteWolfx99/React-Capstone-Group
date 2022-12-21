import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Views/Navbar';
import Main from './routes';
import { fetchMissions } from './Redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
