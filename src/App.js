import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from "./Home"
import Add from './components/Add'
import Update from './components/Update'
import Profile from './components/Profile'
import Footer from './components/Footer';
import Signup from './components/Signup'
import PrivateCmp from './components/PrivateCmp';
import Login from './components/Login';
import Order from './components/Order';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateCmp/>}>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />}/>
        <Route path='/update/:id' element={<Update />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/order' element={<Order/>} />
        </Route>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
