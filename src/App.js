import logo from './logo.svg';
import './App.css';
import CalculatePublick from './component/CalculatePublick.js';
import AdminPanel from './component/AdminPanel.js';
import Table from './component/Table';

function App() {
  return (
    <div className="App">
      <CalculatePublick/>
      <AdminPanel/>
      {/* <Table/> */}
    </div>
  );
}

export default App;
