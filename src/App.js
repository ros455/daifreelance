import logo from './logo.svg';
import './App.css';
import CalculatePublick from './component/CalculatePublick.js';
import AdminPanel from './component/AdminPanel.js';

function App() {
  return (
    <div className="App">
      <CalculatePublick/>
      <AdminPanel/>
   </div>
  );
}

export default App;
