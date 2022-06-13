// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/navs/TopNav';
import SideNav from './components/navs/SideNav';
import './App.css';
import Home from './components/cars/Home';
import Register from './components/forms/Register';
import Login from './components/forms/Login';
import Error from './components/Error';
import AddCar from './components/forms/AddCar';

import CarDetails from './components/cars/CarDetails';
import Reserve from './components/forms/Reserve';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cars/:id" element={<CarDetails />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/sign_in" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reservation" element="My Reservation" />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/delete" element="Delete Car" />
          </>
        ) : (
          ''
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
