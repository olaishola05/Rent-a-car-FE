// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/navs/TopNav';
import SideNav from './components/navs/SideNav';
import './App.css';
import Home from './components/Home';
import Register from './components/forms/Register';
import Login from './components/forms/Login';
import Error from './components/Error';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/sign_up" element={<Register />} />
        <Route path="/sign_in" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/reserve" element="Reserve Form" />
            <Route path="/reservation" element="My Reservation" />
            <Route path="/add-car" element="Add Car" />
            <Route path="/delete" element="Delete Car" />
          </>
        ) : ''}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
