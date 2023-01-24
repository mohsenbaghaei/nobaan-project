import './App.css';
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products';
import Users from './pages/Users';
import Verification from './pages/Verification';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/verification' element={<Verification/>} />
      </Routes>
    </div>
  );
}

export default App;
