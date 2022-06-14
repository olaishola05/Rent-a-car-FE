// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/navs/TopNav';
import SideNav from './components/navs/SideNav';
import './App.css';
import Home from './components/cars/Home';
import Register from './components/forms/Register';
import Login from './components/forms/Login';
import Error from './components/Error';
import CarDetails from './components/cars/CarDetails';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const data = JSON.parse(localStorage.getItem('user'));
  const { user } = data || {};

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
            <Route path="/reserve" element="Reserve Form" />
            <Route path="/reservation" element="My Reservation" />
            {user.role === 'admin'
            && (
            <>
              <Route path="/add-car" element="Add Car" />
              <Route path="/delete" element="Delete Car" />
            </>
            )}
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
