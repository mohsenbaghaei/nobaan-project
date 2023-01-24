import './App.css';
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products';
import Users from './pages/Users';
import Verification from './pages/Verification';
import Header from './components/Header';
import Fotter from './components/Fotter';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/products' element={<Products/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='verification' element={<Verification/>} />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
