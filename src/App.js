import logo from './logo.svg';
import './App.css';
// import CalculatePublick from './component/CalculatePublick.js';
import CalculatePublick from './component/CalculatePublick.js';
import AdminPanel from './component/AdminPanel.js';
import Login from './component/Login';
import {Routes, Route} from 'react-router-dom';
import OrderForm from './component/OrderForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CalculatePublick/>}/>
        <Route path='edit' element={<Login/>}/>
        <Route path='edit/admin' element={<AdminPanel/>}/>
        <Route path='order' element={<OrderForm/>}/>
      </Routes>
         </div>
  );
}

export default App;
