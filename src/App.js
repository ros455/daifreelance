import logo from './logo.svg';
import './App.css';
// import CalculatePublick from './component/CalculatePublick.js';
import CalculatePublick from './component/CalculatePublick.js';
import AdminPanel from './component/AdminPanel.js';
import Login from './component/Login';
import {Routes, Route} from 'react-router-dom';
import OrderForm from './component/OrderForm';
import TestLogo from './component/TestLogo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CalculatePublick/>}/>
        <Route path='edit' element={<Login/>}/>
        <Route path='edit/admin' element={<AdminPanel/>}/>
        <Route path='order' element={<OrderForm/>}/>
        <Route path='test' element={<TestLogo/>}/>
      </Routes>
         </div>
  );
}

export default App;
