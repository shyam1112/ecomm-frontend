import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from "./Home"
import Add from './Add'
import Update from './components/Update'
import Login from './components/Login'
import Profile from './components/Profile'
import Footer from './components/Footer';
import Signup from './components/Signup'

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
        <Route path='/signup' element={<Signup />}/>
        <Route path='/profile' element={<Profile />}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
