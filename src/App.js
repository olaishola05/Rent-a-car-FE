import { useSelector } from 'react-redux';
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
import DeleteCar from './components/cars/DeleteCar';
import Reserve from './components/forms/Reserve';
import MyReservations from './components/reservations/MyReservations';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const data = JSON.parse(localStorage.getItem('user'));
  const car = useSelector((state) => state.cars);
  const { user } = data || {};

  return (
    <div className="App">
      <TopNav />
      <div className="d-flex">
        <SideNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cars/:id" element={<CarDetails />} />
          <Route path="/sign_up" element={<Register />} />
          <Route path="/sign_in" element={<Login />} />
          {isLoggedIn ? (
            <>
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/reservation" element={<MyReservations />} />
              {user.role === 'admin' && (
              <>
                <Route path="/add-car" element={<AddCar />} />
                <Route path="/delete" element={<DeleteCar car={car} />} />
              </>
              )}
            </>
          ) : (
            ''
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
