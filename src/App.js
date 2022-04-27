import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin/Admin';
import Register from './pages/Auth/Register/Register';
import Blog from './pages/Blog/Blog';
import Donation from './pages/Donation/Donation';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
