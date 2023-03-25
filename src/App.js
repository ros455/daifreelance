import logo from './logo.svg';
import './App.css';
import CalculatePublick from './component/CalculatePublick.js';
import AdminPanel from './component/AdminPanel.js';
import Table from './component/Table';
import AnimWave from './component/AnimWave';

function App() {
  return (
    <div className="App">
      <CalculatePublick/>
      <AdminPanel/>
      {/* <Table/> */}
      {/* <AnimWave/> */}
    </div>
  );
}

export default App;
