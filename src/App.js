// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/navs/TopNav';
import SideNav from './components/navs/SideNav';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reserve" element="Reserve Form" />
        <Route path="/reservation" element="My Reservation" />
        <Route path="/add-car" element="Add Car" />
        <Route path="/delete" element="Delete Car" />
      </Routes>
    </div>
  );
}

export default App;
