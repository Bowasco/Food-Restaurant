import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
  );
}

export default App;
