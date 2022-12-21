import Navbar from './Views/Navbar';
import Main from './routes';

function App() {
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
