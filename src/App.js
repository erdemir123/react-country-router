
import './App.css';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import {Routes,Route} from "react-router-dom"
import Nav from './components/Nav';
function App() {
  return (
    <>
    <Nav />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:name" element={<CountryDetails />}/>
      </Routes>
    </>
  );
}

export default App;
