import './App.css';
import Routes from './Routes';
import Navbar from './Components/Navbar/index'

function App() {
  return (
    <div className="AppContainer">
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
