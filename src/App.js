import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from "./Home"
import Add from './Add'
import Update from './Update'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />}/>
        <Route path='/update' element={<Update />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/profile' element={<Profile />}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
